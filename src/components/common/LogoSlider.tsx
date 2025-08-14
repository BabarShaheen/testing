// components/common/LogoSlider.tsx
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const logos = [
  '/Images/slider/2_optimized.webp',
  '/Images/slider/3_optimized.webp',
  '/Images/slider/4_optimized.webp',
  '/Images/slider/5_optimized.webp',
  '/Images/slider/6_optimized.webp',
  '/Images/slider/7_optimized.webp',
  '/Images/slider/8_optimized.webp',
  '/Images/slider/9_optimized.webp',
  '/Images/slider/10_optimized.webp',
  '/Images/slider/11_optimized.webp',
  '/Images/slider/12_optimized.webp',
  '/Images/slider/13_optimized.webp',
];

export default function LogoSlider() {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      // Calculate the total width of all logos plus gaps
      setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden py-8 bg-gradient-to-r from-gray-50 to-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(to right, var(--color-crimson-pink) 1px, transparent 1px), 
                           linear-gradient(to bottom, var(--color-crimson-pink) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <motion.div 
        ref={sliderRef}
        className="flex items-center gap-12 px-4"
        animate={{
          x: [-width, 0],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        {logos.map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 relative group"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={src}
              alt={`Logo ${idx + 1}`}
              className="h-16 w-auto object-contain transition-all duration-500"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            />
            <motion.div 
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-crimson-pink/5 to-vivid-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />
          </motion.div>
        ))}
        
        {/* Duplicate logos for seamless loop */}
        {logos.map((src, idx) => (
          <motion.div
            key={`dup-${idx}`}
            className="flex-shrink-0 relative group"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={src}
              alt={`Logo duplicate ${idx + 1}`}
              className="h-16 w-auto object-contain transition-all duration-500"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            />
            <motion.div 
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-crimson-pink/5 to-vivid-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
