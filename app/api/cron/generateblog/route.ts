import { generateBlog } from "@/lib/blogMaker/generateBlog";
import { saveToMongo } from "@/lib/dbHelper/saveToMongodb";
import { generateBlogPrompt } from "@/lib/blogMaker/prompt/generatePrompt";
import { getImages } from "@/lib/dbHelper/alreadyUsedBlogs";

export const revalidate = 0;

export async function GET() {
  try {
    const images=await getImages();
    const BLOG_PROMPT = generateBlogPrompt(images);
    const generatedBlogdata = await generateBlog(BLOG_PROMPT);
    await saveToMongo(generatedBlogdata.data);
    return Response.json({
      message: "Blog generated and saved",
      generatedBlogdata,
    });
  } catch (error) {
    console.error("error", error);
    return Response.json({ error: "Failed to generate or save blog" });
  }
}
