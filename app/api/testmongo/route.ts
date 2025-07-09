import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ result: "MongoDB connected" });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { result: "MongoDB connection failed" },
      { status: 500 },
    );
  }
}
