import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { create } from "domain";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

type Article = {
  title: string;
  categories: Array<string>;
  thumbnail: string;
  summary: string;
  publishDate: any;
  id: string;
  country: string;
  minRead: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseId) {
    console.error("Missing Notion secret or database ID.");
    res.status(500).json({ error: "Missing Notion secret or database ID." });
    return;
  }

  try {
    const query = await notion.databases.query({
      database_id: notionDatabaseId,
      filter: {
        property: "status",
        select: {
          equals: "✅ Published",
        },
      },
    });

    const articles: Article[] = query.results.map((page: any) => {
      const properties = page.properties;

      const article: Article = {
        title: properties.title?.title?.[0]?.text?.content || "Untitled",
        categories:
          properties.categories?.multi_select?.map(
            (category: any) => category.name
          ) || [],
        thumbnail: properties.thumbnail?.files?.[0]?.file?.url || "",
        summary: properties.summary?.rich_text?.[0]?.text?.content || "",
        publishDate: page.created_time,
        id: page.id,
        country: properties.country?.select?.name || "",
        minRead: properties.minRead?.rich_text?.[0]?.text?.content || "",
      };

      return article;
    });

    res.status(200).json(articles);
  } catch (error) {
    console.error("Failed to fetch data from Notion:", error);
    res.status(500).json({ error: "Failed to fetch data from Notion." });
  }
}
