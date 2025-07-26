"use client";
import React, { useEffect, useState } from "react";
import Text from "@/app/widget/Text";
import Button from "@/app/widget/Button";
import Link from "next/link";
import Loading from "@/app/widget/Loading";
type Blog = {
  title: string;
  author: string;
  date: string;
  slug: string;
  ogImage: string;
};
const options: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};
function Blogcontent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const limit = 2;

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/blogbasicinfo?limit=${limit}&skip=${page * limit}`,
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black border-t-2 flex-col">
      <div
        className="w-full h-[300px] bg-cover bg-no-repeat bg-center text-center flex justify-center items-center"
        style={{ backgroundImage: "url('/images/blogpageimg.jpg')" }}
      >
        <Text
          variant="extralarge"
          className="italic text-white font-bold font-serif mt-2 ml-2 text-4xl"
        >
          Read Our Blogs
        </Text>
      </div>

      <div className="w-full max-w-4xl px-6 py-8">
        {loading == true && blogs.length === 0 ? (
          <div className="text-center text-gray-600 mb-5">
            <Text className="font-bold text-black dark:text-white">
              Loading
            </Text>
            <Loading />
          </div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.slug}
              className="p-4 my-4 bg-white dark:bg-black rounded-lg shadow-md flex gap-4 items-start dark:border-2 "
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
                  <Text variant="caption">
                    {new Date(blog.date).toLocaleString("en-US", options)}
                    {/*{blog.date}*/}
                  </Text>
                </div>
              </div>
            </div>
          ))
        )}

        {blogs.length > 0 && hasMore && (
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
