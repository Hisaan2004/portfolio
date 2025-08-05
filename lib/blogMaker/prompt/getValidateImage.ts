/*export async function getValidImageURL(
  technology: string,
  concept: string,
  usedImages: string[]
): Promise<string> {
  const keywords = `${technology} ${concept}`;
  const searchQuery = encodeURIComponent(keywords);
  const imageSources = [
    `https://source.unsplash.com/featured/?${searchQuery}`,
    `https://source.unsplash.com/800x600/?${searchQuery}`,
    `https://images.pexels.com/photos/11035556/pexels-photo-11035556.jpeg`,
    `https://images.unsplash.com/photo-1518779578993-ec3579fee39f`,
  ];

  // Try valid image URLs that are NOT already used
  for (const url of imageSources) {
    const fullUrl = url.includes("http") ? url : `https://${url}`;
    if (!usedImages.includes(fullUrl)) {
      // Optional: you can test the URL via fetch HEAD if needed
      return fullUrl;
    }
  }

  // Fallback
  return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
}
*/
import fetch from 'node-fetch'; // Or global fetch in Next.js 13+

export async function getValidImageURL(technology: string, concept: string, images: string[]): Promise<string> {
  // Filter images by relevance
  const relevantImages = images.filter(url => {
    const lowerUrl = url.toLowerCase();
    return (
      lowerUrl.includes(technology.toLowerCase()) ||
      lowerUrl.includes(concept.toLowerCase())
    ) && /\.(jpg|jpeg|png|webp)$/.test(lowerUrl);
  });

  // Shuffle the filtered list
  const shuffledImages = relevantImages.sort(() => Math.random() - 0.5);

  for (const url of shuffledImages) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        return `"${url}"`; // Return as string wrapped in quotes
      }
    } catch {
      // Ignore failed URLs
      continue;
    }
  }

  // Fallback to first working generic image
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

  // Final fallback
  return `"https://via.placeholder.com/800x400.png?text=${encodeURIComponent(technology + ' ' + concept)}"`;
}
