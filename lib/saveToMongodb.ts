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
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in .env.local");
}
const client = new MongoClient(uri);
export async function saveToMongo(blogData:BlogPost) {
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
