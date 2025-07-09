export const BLOG_PROMPT = `
Write a blog post on the any topic but keep in mind that the topic should be decent.
Return valid JSON in the following format:
{
  "title": "...",
  "slug": "...",
  "summary": "...",
  "tags": ["...", "..."],
  "category": "...",
  "date": "ISO date string",
  "author": "...",
  "content": "<p>...</p>"
}
  `;
