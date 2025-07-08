import type { NextApiRequest, NextApiResponse } from "next";
import { generateBlog } from "@/lib/generateBlog";
import { saveToMongo } from "@/lib/saveToMongodb";
import {BLOG_PROMPT} from "@/app/api/chat/blogPrompt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blog = await generateBlog(BLOG_PROMPT);
    await saveToMongo(blog);
    res.status(200).json({ message: "Blog generated and saved", blog });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to generate or save blog" });
  }
}
