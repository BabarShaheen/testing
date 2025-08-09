import { useEffect, useState } from 'react';

interface UseImagePreloaderProps {
  imageUrls: string[];
  priority?: boolean;
}

export function useImagePreloader({ imageUrls, priority = false }: UseImagePreloaderProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!priority) {
      setIsLoading(false);
      return;
    }

    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(url));
            resolve();
          };
          img.onerror = () => {
            // Don't fail the entire preload if one image fails
            console.warn(`Failed to preload image: ${url}`);
            resolve();
          };
          img.src = url;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [imageUrls, priority]);

  return { loadedImages, isLoading };
}
