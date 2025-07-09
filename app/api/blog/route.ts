import { generateBlog } from "@/lib/generateBlog";
import { saveToMongo } from "@/lib/saveToMongodb";
import { BLOG_PROMPT } from "@/app/api/blog/blogPrompt";
export const revalidate=0;
export async function GET() {
  try {
    const blog = await generateBlog(BLOG_PROMPT);
    await saveToMongo(blog);
    return Response.json({ message: "Blog generated and saved", blog });
  } catch (err) {
    console.error("Error:", err);
    return Response.json({ error: "Failed to generate or save blog" });
  }
}
