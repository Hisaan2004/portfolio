/*import fetch from 'node-fetch';

export async function getValidImageURL(technology: string, concept: string, images: string[]): Promise<string> {

  const relevantImages = images.filter(url => {
    const lowerUrl = url.toLowerCase();
    return (
      lowerUrl.includes(technology.toLowerCase()) ||
      lowerUrl.includes(concept.toLowerCase())
    ) && /\.(jpg|jpeg|png|webp)$/.test(lowerUrl);
  });

  const shuffledImages = relevantImages.sort(() => Math.random() - 0.5);

  for (const url of shuffledImages) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        return `"${url}"`; 
      }
    } catch {
      continue;
    }
  }

  const fallbackImages = images.filter(url => /\.(jpg|jpeg|png|webp)$/.test(url));
  for (const url of fallbackImages) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        return `"${url}"`;
      }
    } catch {
      continue;
    }
  }

  return `"https://via.placeholder.com/800x400.png?text=${encodeURIComponent(technology + ' ' + concept)}"`;
}*/
/*
import fetch from 'node-fetch';

export async function getValidImageURL(
  technology: string,
  concept: string,
  previouslyUsedImages: string[]
): Promise<string> {

  const usedSet = new Set(previouslyUsedImages.map(url => url.toLowerCase()));

  const isValidExtension = (url: string) => /\.(jpg|jpeg|png|webp)$/.test(url.toLowerCase());

  const relevantImages = previouslyUsedImages.filter(url => {
    const lowerUrl = url.toLowerCase();
    return (
      !usedSet.has(lowerUrl) && // exclude all previously used
      (lowerUrl.includes(technology.toLowerCase()) ||
        lowerUrl.includes(concept.toLowerCase())) &&
      isValidExtension(lowerUrl)
    );
  });

  const shuffled = relevantImages.sort(() => Math.random() - 0.5);

  for (const url of shuffled) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return `"${url}"`;
    } catch {
      continue;
    }
  }

  // Try any unused image
  const fallbackImages = previouslyUsedImages.filter(url => {
    const lowerUrl = url.toLowerCase();
    return !usedSet.has(lowerUrl) && isValidExtension(lowerUrl);
  });

  for (const url of fallbackImages) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return `"${url}"`;
    } catch {
      continue;
    }
  }

  // Final fallback
  return `"https://via.placeholder.com/800x400.png?text=${encodeURIComponent(technology + ' ' + concept)}"`;
}
*//*
import fetch from "node-fetch";

export async function getValidImageURL(
  technology: string,
  concept: string,
  previouslyUsedImages: string[]
): Promise<string> {
  const isValidExtension = (url: string) =>
    /\.(jpg|jpeg|png|webp)$/i.test(url);

  // Filter out broken images and only consider relevant ones
  const relevantImages = previouslyUsedImages.filter(url => {
    const lowerUrl = url.toLowerCase();
    return (
      (lowerUrl.includes(technology.toLowerCase()) ||
       lowerUrl.includes(concept.toLowerCase())) &&
      isValidExtension(lowerUrl)
    );
  });

  const shuffled = relevantImages.sort(() => Math.random() - 0.5);

  for (const url of shuffled) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return `"${url}"`;
    } catch {
      continue;
    }
  }

  // Final fallback: placeholder
  return `"https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
    technology + " " + concept
  )}"`;
}*//*
import fetch from "node-fetch";

export async function getValidImageURL(
  technology: string,
  concept: string,
  previouslyUsedImages: string[]
): Promise<string> {
  const isValidExtension = (url: string) => /\.(jpg|jpeg|png|webp)$/i.test(url);

  // Generate a candidate list (replace this with actual API calls if needed)
  const candidateImages = [
    `https://source.unsplash.com/800x400/?${encodeURIComponent(technology)},${encodeURIComponent(concept)}`,
    `https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg`,
    `https://via.placeholder.com/800x400.png?text=${encodeURIComponent(technology + " " + concept)}`
  ];

  for (const url of candidateImages) {
    const lowerUrl = url.toLowerCase();
    if (
      !previouslyUsedImages.includes(url) && // ❌ Skip already-used
      isValidExtension(lowerUrl)             // ✅ Ensure correct file type
    ) {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) {
          return url; // return raw string, not quoted
        }
      } catch {
        continue;
      }
    }
  }

  // Final fallback if all fail
  return `https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
    technology + " " + concept
  )}`;
}
*/
import { imagePool } from "./imagePool";

export async function getValidImageURL(
  technology: string,
  concept: string,
  previouslyUsedImages: string[]
): Promise<string> {
  const techKey = technology.toLowerCase();
  const candidates = imagePool[techKey] || [];

  // Remove URLs already used
  const unusedImages = candidates.filter(url => !previouslyUsedImages.includes(url));

  if (unusedImages.length === 0) {
    // All images used → fallback
    return `https://via.placeholder.com/800x400.png?text=${encodeURIComponent(technology + " " + concept)}`;
  }

  // Pick a random unused image
  const chosen = unusedImages[Math.floor(Math.random() * unusedImages.length)];
  return chosen;
}

