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
};

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen px-6 py-8 max-w-3xl mx-auto bg-white dark:bg-black">
      <Text variant="heading" className="text-3xl font-bold mb-2">
        {blog.title}
      </Text>
      <p className="text-sm text-gray-500 mb-4">
        {blog.author} | {blog.date}
      </p>
      <div className="prose dark:prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;
