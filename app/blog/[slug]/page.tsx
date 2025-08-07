/*import { connectToDB } from "@/app/service/mongodb";
import { notFound } from "next/navigation";
import BlogDetails from "./blogDetails";
import { CONFIG } from "@/config";
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const db = await connectToDB();
  const blog = await db
    .collection<Blog>(CONFIG.COLLECTION_NAME)
    .findOne({ slug });

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
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const db = await connectToDB();
  const blog = await db
    .collection<Blog>(CONFIG.COLLECTION_NAME)
    .findOne({ slug }, { projection: { _id: 0 } });

  if (!blog) return notFound();

  return <BlogDetails blog={blog} />;
}
*//*
import { connectToDB } from "@/app/service/mongodb";
import { notFound } from "next/navigation";
import BlogDetails from "./blogDetails";
import { CONFIG } from "@/config";

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

// ✅ Fix type: remove Promise
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const db = await connectToDB();
  const blog = await db
    .collection<Blog>(CONFIG.COLLECTION_NAME)
    .findOne({ slug });

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

// ✅ Fix type: remove Promise
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const db = await connectToDB();
  const blog = await db
    .collection<Blog>(CONFIG.COLLECTION_NAME)
    .findOne({ slug }, { projection: { _id: 0 } });

  if (!blog) return notFound();

  return <BlogDetails blog={blog} />;
}*/
// File: /app/blog/[slug]/page.tsx
import { connectToDB } from "@/app/service/mongodb";
import { notFound } from "next/navigation";
import BlogDetails from "./blogDetails";
import { CONFIG } from "@/config";
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
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const db = await connectToDB();
  const blog = await db.collection(CONFIG.COLLECTION_NAME).findOne({ slug });

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    openGraph: {
      title: blog.ogTitle,
      description: blog.ogDescription,
      images: [{ url: blog.ogImage }],
    },
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const db = await connectToDB();
 // const blog = await db.collection(CONFIG.COLLECTION_NAME).findOne({ slug });
const blog = await db
  .collection<Blog>(CONFIG.COLLECTION_NAME)
  .findOne({ slug }, { projection: { _id: 0 } }) as Blog;
  if (!blog) return notFound();

  return <BlogDetails blog ={blog} />;
}

