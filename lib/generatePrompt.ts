import { getTitles } from "./saveToMongodb";
export async function generateBlogPrompt(): Promise<string> {
  const usedTitles = await getTitles();

  const formattedUsed = usedTitles
    .map((title, i) => `${i + 1}. ${title}`)
    .join("\n");

  return `
You are given two arrays:

Array A – Programming Languages / Concepts:
["JavaScript", "Python", "C++", "Java", "TypeScript", "Go", "Rust", "Ruby", "Kotlin", "Swift", "React", "Node.js", "Django", "Flask", "Spring Boot", "Express.js", "Angular", "Vue.js", "GraphQL", "Next.js"]

Array B – Syntax / Usage Topics:
["arrow functions", "async/await", "list comprehensions", "template literals", "forEach loop", "map/filter/reduce", "error handling", "OOP principles", "closures", "REST API usage", "module imports/exports", "state management", "event handling", "middleware functions", "routing", "form validation", "data fetching", "promises", "generics", "memory management"]

First compute all possible combinations (A × B = 400 topics). Then:
- Randomly choose 1 topic that is **not** in the list of already used topics below.
- Write a unique, well-structured blog on that topic.

Already used topics:
${formattedUsed}

Return the result in valid JSON with the following keys:
{
  "title": "...",
  "slug": "...",
  "summary": "...",
  "tags": ["...", "..."],
  "category": "...",
  "date": "date string",
  "author": "...",
  "content": "...",  // Use **Markdown formatting**: bold, italic, lists, headings, etc.Important: please format the content of the content portion using Markdown.Use **bold**, **italic**, **numbering** ,**lists**,**different color text** indicating the important part and **Headings**.


  // SEO Fields
  "metaTitle": "...",         
  "metaDescription": "...",   
  "keywords": ["...", "..."], 
  "canonicalUrl": "...",      
  "ogTitle": "...",           
  "ogDescription": "...",     
  "ogImage": "...",            // Add a relevant image URL (e.g., from Unsplash, Pexels, or similar) related to the topic
  "imageAlt": "..."            // Add meaningful alt text describing the image
}

Important:
- Do NOT use any topic from the used topics list above.
- The blog must be rich, engaging, SEO-optimized, and written using Markdown syntax.
- Ensure the image is highly relevant to the blog topic. You can use URLs from public image sources (e.g., https://unsplash.com or https://pexels.com).
`;
}
