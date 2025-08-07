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
