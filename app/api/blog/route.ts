import { generateBlog } from "@/lib/generateBlog";
import { saveToMongo } from "@/lib/saveToMongodb";
import { generateBlogPrompt } from "@/lib/generatePrompt";
export const revalidate = 0;
export async function GET() {
  try {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const fullDateTime = `${formattedDate}, ${formattedTime}`;
    const BLOG_PROMPT = await generateBlogPrompt();
    const generatedBlog = await generateBlog(BLOG_PROMPT);
    const blog = {
      ...generatedBlog,
      date: fullDateTime,
    };
    await saveToMongo(blog);
    return Response.json({ message: "Blog generated and saved", blog });
  } catch (err) {
    console.error("Error:", err);
    return Response.json({ error: "Failed to generate or save blog" });
  }
}
