import { useState, useEffect, useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface OptimizedImageProps extends HTMLMotionProps<'img'> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  background?: boolean;
  children?: React.ReactNode;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw', 
  priority = false, 
  background = false,
  children,
  ...motionProps
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate WebP source
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  const isWebPSupported = typeof window !== 'undefined' && 'WebP' in window;

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Preload image for background images to prevent blinking
  useEffect(() => {
    if (background && isInView) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsLoaded(true);
      img.src = isWebPSupported ? webpSrc : src;
    }
  }, [background, isInView, src, webpSrc, isWebPSupported]);

  if (background) {
    const backgroundImage = isInView && isLoaded ? `url(${isWebPSupported ? webpSrc : src})` : 'none';
    
    return (
      <motion.div 
        ref={containerRef}
        className={`relative ${className}`}
        style={{ 
          backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.3s ease-in-out'
        }}
        {...motionProps}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        {children}
      </motion.div>
    );
  }

  if (!isInView) {
    return (
      <motion.div ref={containerRef} className={`${className} bg-gray-200`} {...motionProps}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.picture className={className} {...motionProps}>
      {isWebPSupported && <source srcSet={webpSrc} type="image/webp" />}
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        {...motionProps}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200" />
      )}
    </motion.picture>
  );
}
