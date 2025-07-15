import { MongoClient, Db } from "mongodb";
import { CONFIG } from '@/config';

const URI = CONFIG.URI;
const DB_NAME = CONFIG.DB_NAME;

if (!URI) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

// Global cache to store client across hot reloads (important for development)
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDB(): Promise<Db> {
  if (cachedDb) return cachedDb; // Return cached DB if available

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(URI);
      await cachedClient.connect();
      console.log("MongoDB connected");
    }

    cachedDb = cachedClient.db(DB_NAME);
    return cachedDb;
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw error;
  }
}

