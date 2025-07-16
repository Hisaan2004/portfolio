import { generateBlog } from "@/lib/blogMaker/generateBlog";
import { saveToMongo } from "@/lib/dbHelper/saveToMongodb";
import { generateBlogPrompt } from "@/lib/blogMaker/prompt/generatePrompt";

export const revalidate = 0;

export async function GET() {
  try {
    const BLOG_PROMPT = await generateBlogPrompt();
    const generatedBlogdata = await generateBlog(BLOG_PROMPT);
    await saveToMongo(generatedBlogdata.data);
    return Response.json({ message: "Blog generated and saved", generatedBlogdata });
  } catch (error) {
    console.error("error",error);
    return Response.json({ error: "Failed to generate or save blog" });
  }
}
