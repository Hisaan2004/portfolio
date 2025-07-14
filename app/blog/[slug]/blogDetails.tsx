"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import Text from "@/app/widget/Text";
type Blog = {
  title: string;
  slug: string;
  date: string;
  author: string;
  content: string;
  ogImage:string;
};

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen px-6 py-8 max-w-3xl mx-auto bg-white dark:bg-black">
      <img
    src={blog.ogImage}
    alt={blog.title}
    className="  object-cover rounded-md w-full shrink-0 mb-2"
  />
      <Text variant="heading" className="text-3xl font-bold mb-2">
        {blog.title}
      </Text>
      <Text variant='caption'className=" mb-4">
        {blog.author} | {blog.date}
      </Text>
      <div className="prose dark:prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;
