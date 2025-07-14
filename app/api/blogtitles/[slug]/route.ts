import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } },
) {
  const { slug } = context.params;
  console.log("Received slug:", slug);

  try {
    const db = await connectToDB();
    const blog = await db.collection("blogs").findOne({ slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (_) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
