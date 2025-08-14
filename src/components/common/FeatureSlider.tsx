// components/common/FeatureSlider.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
  // Determine color based on index - for text and subtle accents only
  const colors = [
    { text: 'text-crimson-pink', hover: 'hover:text-crimson-pink', accent: 'from-crimson-pink to-vivid-red', gradient: 'from-crimson-pink to-vivid-red' },
    { text: 'text-vivid-red', hover: 'hover:text-vivid-red', accent: 'from-vivid-red to-warm-amber', gradient: 'from-vivid-red to-warm-amber' },
    { text: 'text-warm-amber', hover: 'hover:text-warm-amber', accent: 'from-warm-amber to-crimson-pink', gradient: 'from-warm-amber to-crimson-pink' },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="group relative w-full max-w-sm mx-auto h-[400px] flex-shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden h-full flex flex-col border border-gray-100"
        whileHover={{
          boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.15)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Modern diagonal accent line */}
        <motion.div 
          className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-crimson-pink/30 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        
        {/* Subtle background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, var(--color-crimson-pink) 1px, transparent 1px), 
                             linear-gradient(to bottom, var(--color-crimson-pink) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </motion.div>
        
        {/* Title with modern design and letter animation */}

        {/* Title with modern design and letter animation */}
        <motion.h3
          className="text-2xl font-bold mb-3 text-charcoal-navy group-hover:text-charcoal-navy/90 transition-colors duration-300 relative inline-block"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05 + charIndex * 0.03,
                ease: "easeOut"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h3>

        {/* Modern animated accent line */}
        <motion.div 
          className="relative h-1 mb-4 overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-r ${color.gradient} rounded-full`}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute inset-0 bg-white opacity-30 rounded-full"
            initial={{ width: '30%', x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>

        {/* Description with staggered animation - simplified for performance */}
        <motion.div className="mb-4 flex-grow">
          <motion.p
            className="text-charcoal-navy/70 leading-relaxed text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1 + 0.3,
              ease: "easeOut"
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Learn More Link with modern style */}
        <motion.div
          className={`flex items-center ${color.text} font-semibold text-sm mt-2 cursor-pointer relative overflow-hidden group`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="flex items-center relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            <span>Learn more</span>
            <motion.div
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
          
          {/* Animated highlight effect */}
          <motion.div 
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${color.gradient} rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
          />
        </motion.div>

        {/* Subtle gradient background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

type FeatureSliderProps = {
  features: Array<{
    title: string;
    description: string;
  }>;
};

export default function FeatureSlider({ features }: FeatureSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Direction state removed as it wasn't being used
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Using number type instead of NodeJS.Timeout for better compatibility
  const autoPlayRef = useRef<number | null>(null);

  // Calculate visible cards based on screen width
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - visibleCards : prev - 1));
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - visibleCards ? 0 : prev + 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
      if (isAutoPlaying) {
        autoPlayRef.current = window.setInterval(() => {
          handleNext();
        }, 5000);
      }
    }
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Calculate progress percentage
  const progressPercentage = (currentIndex / (features.length - visibleCards)) * 100;

  return (
    <div 
      className="relative w-full py-8"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Main slider container */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={sliderRef}
          className="flex gap-6 px-4"
          initial={false}
          animate={{
            x: `calc(-${currentIndex * 100}% / ${features.length - visibleCards + 1})`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          }}
        >
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              index={idx}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation controls with modern Citrix-style */}
      <div className="flex justify-between items-center mt-8 px-4">
        <div className="flex gap-2">
          {/* Progress indicator with modern wave effect */}
          <div className="w-64 h-3 bg-gray-200 rounded-sm overflow-hidden relative">
            {/* Wave pattern background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="wave-pattern" x="0" y="0" width="20" height="3" patternUnits="userSpaceOnUse">
                  <path d="M0,1.5 C2.5,0 7.5,0 10,1.5 C12.5,3 17.5,3 20,1.5" fill="none" stroke="rgba(237, 37, 104, 0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
            
            <motion.div
              className="h-full bg-gradient-to-r from-crimson-pink to-vivid-red relative"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated wave effect inside progress bar */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <path 
                    d="M0,1.5 C5,0 15,3 20,1.5 C25,0 35,3 40,1.5 C45,0 55,3 60,1.5 C65,0 75,3 80,1.5" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.3)" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              
              {/* Animated shine effect */}
              <motion.div 
                className="absolute inset-0 bg-white opacity-30"
                initial={{ width: '30%', x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.div>
          </div>
          
          <p className="text-sm text-charcoal-navy/60 font-medium">
            {currentIndex + 1} / {features.length - visibleCards + 1}
          </p>
        </div>
        
        {/* Slide indicators */}
        <div className="hidden md:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
          {Array.from({ length: features.length - visibleCards + 1 }).map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-crimson-pink' : 'bg-gray-300'}`}
              onClick={() => {
                setCurrentIndex(idx);
                resetAutoPlay();
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: idx === currentIndex ? 1.2 : 1,
                opacity: idx === currentIndex ? 1 : 0.6
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          {/* Previous button with modern square shape and wave effect */}
          <motion.button
            className="w-10 h-10 relative bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:text-white rounded-md transition-colors duration-300 overflow-hidden"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Wave background that appears on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-crimson-pink to-vivid-red opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                <defs>
                  <pattern id="button-wave-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M0,10 C3.5,7 6.5,13 10,10 C13.5,7 16.5,13 20,10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#button-wave-pattern)" />
              </svg>
            </motion.div>
            
            <ArrowLeft size={18} className="relative z-10" />
          </motion.button>
          
          {/* Next button with modern square shape and wave effect */}
          <motion.button
            className="w-10 h-10 relative bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:text-white rounded-md transition-colors duration-300 overflow-hidden"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Wave background that appears on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-crimson-pink to-vivid-red opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                <defs>
                  <pattern id="button-wave-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M0,10 C3.5,7 6.5,13 10,10 C13.5,7 16.5,13 20,10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#button-wave-pattern-2)" />
              </svg>
            </motion.div>
            
            <ArrowRight size={18} className="relative z-10" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}