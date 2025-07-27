import { connectToDB } from "@/app/service/mongodb";
export async function getImages(): Promise<string[]> {
  try {
    const db = await connectToDB();
    const titles = await db
      .collection("blogs")
      .find({}, { projection: { _id: 0,ogImage:1 } })
      .toArray();
    return titles.map((item) => item.ogImage);
  } catch (error) {
    console.error("Failed to fetch titles:", error);
    return [];
  }
}