// lib/db.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

const client = new MongoClient(uri);

export async function connectToDB() {
  try {
    await client.connect();
    console.log("MongoDB connected");
    return client.db(dbName);
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw error;
  }
}
