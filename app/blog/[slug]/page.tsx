import { connectToDB } from "@/lib/db";
import { notFound } from "next/navigation";
import BlogDetails from "./blogDetails";

type Blog = {
  title: string;
  slug: string;
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

// ✅ Fix: Await params (some frameworks pass it as a Promise in RSC)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const db = await connectToDB();
  const blog = await db.collection<Blog>("blogs").findOne({ slug });

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: blog.canonicalUrl,
    },
    openGraph: {
      title: blog.ogTitle,
      description: blog.ogDescription,
      url: blog.canonicalUrl,
      siteName: "Hisaan's Blog",
      images: [{ url: blog.ogImage, alt: blog.imageAlt }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.ogImage],
    },
  };
}

// ✅ Fix: Await params here too
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const db = await connectToDB();
  const blog = await db.collection<Blog>("blogs").findOne({ slug });

  if (!blog) return notFound();

  // ✅ Fix: Remove _id to prevent Next.js RSC prop serialization error
  const { _id, ...cleanBlog } = blog;

  return <BlogDetails blog={cleanBlog} />;
}
