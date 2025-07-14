import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET() {
  try {
    const db = await connectToDB();
    const collection = await db.collection("blogs");
    const titles = await collection
      .find(
        {},
        {
          projection: {
            _id: 0,
            title: 1,
            date: 1,
            author: 1,
            slug: 1 /*content:1*/,
            ogImage:1,
          },
        },
      )
      .toArray();
    return NextResponse.json(titles);
  } catch (error) {
    console.error("error: ", error);
    return NextResponse.json(
      { error: "Failed to fetch blog titles" },
      { status: 500 },
    );
  }
}
