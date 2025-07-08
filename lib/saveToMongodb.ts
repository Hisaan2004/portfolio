import { MongoClient } from "mongodb";
export type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  category: string;
  date: string;
  author: string;
  content: string;
};
export async function saveToMongo(blogData:BlogPost) {
  const client = new MongoClient(process.env.MONGODB_URI as string);
  try {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("blogs");
    await collection.insertOne(blogData);
    console.log("✅ Blog saved to MongoDB.");
  } finally {
    await client.close();
  }
}
