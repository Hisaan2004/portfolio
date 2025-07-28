export async function getValidImageURL(
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
