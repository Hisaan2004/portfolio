export const BLOG_PROMPT = `
Write a blog post on the any of these topics:Next.js,Tailwind,Portfolio
Return valid JSON in the following format:
{
  "title": "...",
  "slug": "...",
  "summary": "...",
  "tags": ["...", "..."],
  "category": "...",
  "date": "ISO date string",
  "author": "AI Bot",
  "content": "<p>...</p>"
}
  `;