import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

// Create Gemini model
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY as string,
});

// Accept a single string prompt
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
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error("❌ Error generating blog:", err);
    throw err;
  }
}
