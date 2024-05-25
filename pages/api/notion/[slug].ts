import { NextApiRequest, NextApiResponse } from "next";
import NotionService from "@/services/notion.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: "Missing slug parameter" });
  }

  const notionService = new NotionService();

  try {
    const blogPost = await notionService.getSingleBlogPost(slug as string);
    return res.status(200).json(blogPost);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch data from Notion." });
  }
}
