import { generateText } from "ai";
import { google } from "@/app/service/google";
export async function generateBlog(prompt: string) {
  try {
    const result = await generateText({
      model: google("models/gemini-1.5-flash-latest"),
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = result.text;
    const jsonStart = reply.indexOf("{");
    const jsonEnd = reply.lastIndexOf("}") + 1;
    const jsonStr = reply.slice(jsonStart, jsonEnd);
    try {
      const data = JSON.parse(jsonStr);
      return { data, success: true };
    } catch (error) {
      return { data: error, success: false };
    }
  } catch (error) {
    return { data: error, success: false };
  }
}
