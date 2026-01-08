import { generateText } from "ai";
import { NextResponse } from "next/server";
import { google } from "@/app/service/google";
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      //model: google("models/gemini-1.5-flash-latest"),
      model: google("models/gemini-2.5-flash"),
      messages: messages,
    });

    const reply = result.text || "[No reply]";
    console.log("the result is:",reply);
    return NextResponse.json({ response: reply });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { response: "Internal server error" },
      { status: 500 },
    );
  }
}
