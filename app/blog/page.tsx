"use client";
import React, { useEffect, useState } from "react";
import Text from "@/app/widget/Text";
import Button from "@/app/widget/Button";
import Link from "next/link";

type Blog = {
  title: string;
  author: string;
  date: string;
  slug: string;
  ogImage: string;
};

function Blogcontent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 2;

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `/api/blogtitles?limit=${limit}&skip=${page * limit}`,
      );
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const { data } = await res.json();

      setBlogs((prev) => [
        ...prev,
        ...data.filter((b: Blog) => !prev.some((p) => p.slug === b.slug)),
      ]);

      if (data.length < limit) setHasMore(false);
    } catch (error) {
      console.error("Error fetching blog titles:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black border-t-2 flex-col">
      <div
        className="w-full h-[300px] bg-cover bg-no-repeat bg-center text-center flex justify-center items-center"
        style={{ backgroundImage: "url('/blogpageimg.jpg')" }}
      >
        <Text
          variant="extralarge"
          className="italic text-white font-bold font-serif mt-2 ml-2 text-4xl"
        >
          Read Our Blogs
        </Text>
      </div>

      <div className="w-full max-w-4xl px-6 py-8">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.slug}
              className="p-4 my-4 bg-white dark:bg-gray-900 rounded-lg shadow-md flex gap-4 items-start"
            >
              <img
                src={blog.ogImage}
                alt={blog.title}
                className="w-32 h-32 object-cover rounded-md shrink-0"
              />
              <div className="flex flex-col justify-between flex-1">
                <Link href={`/blog/${blog.slug}`}>
                  <Button
                    variant="fulllength"
                    className="text-lg font-semibold text-left"
                  >
                    {blog.title}
                  </Button>
                </Link>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Text variant="caption">{blog.author}</Text>
                  <Text variant="caption">{blog.date}</Text>
                </div>
              </div>
            </div>
          ))
        )}

        {hasMore && (
          <div className="text-center mt-6">
            <Button
              variant="modebutton"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogcontent;
