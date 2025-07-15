import { getTodayTopic } from "@/lib/blogMaker/getTodayTopic";
export function generateBlogPrompt(): string {
  const { day, topic, technology, concept, totalTopics } = getTodayTopic();

  return `
You are given two arrays of programming technologies and syntax concepts.

Today is **Day ${day} / ${totalTopics}**.
- Selected topic: **${topic}**

Now write a **rich, SEO-optimized, well-structured blog post** on this topic.

Return the result in valid JSON with the following keys:
{
  "title": "...",
  "slug": "...",
  "summary": "...",
  "tags": ["...", "..."],
  "category": "${technology}",
  "date": "date string",
  "author": "...",
  "content": "...",  // Use **Markdown formatting**: bold, italic, lists, headings, etc.

  // SEO Fields
  "metaTitle": "...",
  "metaDescription": "...",
  "keywords": ["${technology}", "${concept}", "..."],
  "canonicalUrl": "...",
  "ogTitle": "...",
  "ogDescription": "...",
  "ogImage": "https://source.unsplash.com/featured/?${technology},${concept}",
  "imageAlt": "A high-quality image representing ${technology} and ${concept}"
}

Important:
- The blog must be rich, Markdown-formatted, and SEO-optimized keep in mind the ogImage should be working http and does not contain 404 error.
- Use a **highly relevant image** from Unsplash, Pexels, or similar.
`;
}