import { MongoClient } from "mongodb";

export async function saveToMongo(blogData: Record<string, any>) {
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
