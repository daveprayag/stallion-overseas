"use server";
import { PostPage } from "@/lib/types";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import slugify from "slugify";

const notionDatabaseId = process.env.NOTION_DATABASE_ID as string;

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_SECRET });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getSingleBlogPost(slug: string): Promise<PostPage> {
    const response = await this.client.databases.query({
      database_id: notionDatabaseId,
    });

    const data = response.results.map((page: any) => ({
      title: page.properties?.title?.title?.[0]?.text?.content ?? "Untitled",
      categories:
        page.properties?.categories?.multi_select?.map(
          (category: any) => category.name
        ) ?? [],
      thumbnail: page.properties?.thumbnail?.files?.[0]?.file?.url ?? "",
      summary: page.properties?.summary?.rich_text?.[0]?.text?.content ?? "",
      publishedDate: page.created_time ?? "",
      id: page.id,
      country: page.properties?.country?.select?.name ?? "",
      lastUpdated: page.properties.LastEdited?.last_edited_time ?? "",
    }));

    const finalRes = data.find((result) => {
      if (result) {
        const resultSlug = slugify(result.title).toLowerCase();
        return resultSlug === slug;
      }
      return false;
    });

    if (!finalRes) {
      throw "No results available";
    }

    const page = finalRes;

    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    const markdownString: string = this.n2m.toMarkdownString(mdBlocks).parent;
    return {
      post: page,
      markdown: markdownString,
    };
  }
}
