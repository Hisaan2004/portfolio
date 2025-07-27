import { getTodayTopic } from "@/lib/blogMaker/prompt/getTodayTopic";
export function generateBlogPrompt(images:string[]): string {
  const { day, topic, technology, concept, totalTopics } = getTodayTopic();
  const date = new Date().toISOString();
  const usedOGImages=images;

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
  "date": "${date},
  "author": "...",//AI Blog Generator
  "content": "...",  // Use **Markdown formatting**: bold, italic, lists, headings, etc.

  // SEO Fields
  "metaTitle": "...",
  "metaDescription": "...",
  "keywords": ["${technology}", "${concept}", "..."],
  "canonicalUrl": "...",
  "ogTitle": "...",
  "ogDescription": "...",
  "ogImage": "",  //the OgImage shoudl not be among these ${usedOGImages} ogImage=give apicture realed to ${technology},${concept},the ogImage should be valid full http url and should be relevent to the topicsGive me a direct, full https:// URL of a real existing image that I can view in the browser, hosted on a public website (like Unsplash, Pexels, Wikimedia, etc.). Only give me one valid image URL that ends with .jpg, .png, or .webp and opens directly.it should be working not 404 error.
  "imageAlt": "A high-quality image representing ${technology} and ${concept}"
}

Important:
- The blog must be rich, Markdown-formatted, and SEO-optimized keep in mind the ogImage should be working http and does not contain 404 error.
- Use a **highly relevant image** from Unsplash, Pexels, or similar.
`;
}
