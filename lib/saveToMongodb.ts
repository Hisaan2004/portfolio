import { connectToDB } from "@/lib/db";
export type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  category: string;
  date: string;
  author: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  imageAlt: string;
};

export async function saveToMongo(blogData: BlogPost) {
  try {
    const db = await connectToDB();
    const collection = db.collection("blogs");
    await collection.insertOne(blogData);
    console.log("Blog saved to MongoDB.");
  } catch (error) {
    console.error("error", error);
  }
}
export async function getTitles(): Promise<string[]> {
  try {
    const db = await connectToDB();
    const titles = await db
      .collection("blogs")
      .find({}, { projection: { _id: 0, title: 1 } })
      .toArray();
    return titles.map((item) => item.title);
  } catch (error) {
    console.error("Failed to fetch titles:", error);
    return [];
  }
}
