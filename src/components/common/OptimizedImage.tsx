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
  fallbackSrc?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw', 
  priority = false, 
  background = false,
  children,
  fallbackSrc,
  ...motionProps
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate optimized image sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  const optimizedSrc = src.replace(/\.(jpg|jpeg|png)$/, '_optimized.$1');
  const isWebPSupported = typeof window !== 'undefined' && 'WebP' in window;

  // Determine the best source to use
  const getBestSource = () => {
    if (hasError && fallbackSrc) return fallbackSrc;
    if (isWebPSupported) return webpSrc;
    return optimizedSrc || src;
  };

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Increased rootMargin for earlier loading
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
      img.onerror = () => {
        setHasError(true);
        setIsLoaded(true);
      };
      img.src = getBestSource();
    }
  }, [background, isInView, src, webpSrc, optimizedSrc, isWebPSupported, hasError, fallbackSrc]);

  if (background) {
    const backgroundImage = isInView && isLoaded ? `url(${getBestSource()})` : 'none';
    
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}
        {children}
      </motion.div>
    );
  }

  if (!isInView) {
    return (
      <motion.div 
        ref={containerRef} 
        className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse`} 
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.picture className={className} {...motionProps}>
      {isWebPSupported && !hasError && <source srcSet={webpSrc} type="image/webp" />}
      <motion.img
        ref={imgRef}
        src={getBestSource()}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        {...motionProps}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </motion.picture>
  );
}
