import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

type Context = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  const { slug } = context.params;

  try {
    const db = await connectToDB();
    const blog = await db.collection("blogs").findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
