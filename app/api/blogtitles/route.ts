import { NextResponse } from "next/server";
import { connectToDB } from "@/app/service/mongodb";
import { CONFIG } from "@/config";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get("limit") || "2", 10);
    const skip = parseInt(searchParams.get("skip") || "0", 10);

    const db = await connectToDB();
    const collection = db.collection(CONFIG.COLLECTION_NAME);

    const titles = await collection
      .find(
        {},
        {
          projection: {
            _id: 0,
            title: 1,
            date: 1,
            author: 1,
            slug: 1,
            ogImage: 1,
          },
        },
      )
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      data: titles,
      pagination: {
        limit,
        skip,
        returned: titles.length,
      },
    });
  } catch (error) {
    console.error("Error fetching blog titles:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog titles" },
      { status: 500 },
    );
  }
}
