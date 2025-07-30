{/*import { generateText } from "ai";
import { NextResponse } from "next/server";
import { google } from "@/app/service/google";
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      model: google("models/gemini-1.5-flash-latest"),
      messages: messages,
    });

    const reply = result.text || "[No reply]";

    return NextResponse.json({ response: reply });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { response: "Internal server error" },
      { status: 500 },
    );
  }
}
*/}import { generateText } from "ai";
import { NextResponse } from "next/server";
import { google } from "@/app/service/google";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { response: "Invalid request format. Expected an array of messages." },
        { status: 400 },
      );
    }

    const model = google("models/gemini-1.5-flash-latest");
    const result = await generateText({ model, messages });

    console.log("Gemini result:", result); // Debug

    const reply = result.text || "[No reply]";
    return NextResponse.json({ response: reply });
  } catch (err) {
    console.error("❌ Error in chatbot API:", err);
    return NextResponse.json(
      { response: "⚠️ Internal server error." },
      { status: 500 },
    );
  }
}
