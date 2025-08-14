// components/common/FeatureSlider.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  // Determine color based on index - for text and subtle accents only
  const colors = [
    { text: 'text-crimson-pink', hover: 'hover:text-crimson-pink', accent: 'from-crimson-pink to-vivid-red' },
    { text: 'text-vivid-red', hover: 'hover:text-vivid-red', accent: 'from-vivid-red to-warm-amber' },
    { text: 'text-warm-amber', hover: 'hover:text-warm-amber', accent: 'from-warm-amber to-crimson-pink' },
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
        {/* Icon with gradient background */}
        <motion.div 
          className="w-14 h-14 bg-gradient-to-br rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-md"
          style={{
            backgroundImage: `linear-gradient(to bottom right, var(--color-crimson-pink), var(--color-vivid-red))`
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <span className="text-white text-xl flex items-center justify-center w-full h-full">
            {/* Use the icon class from props, or fallback to a default icon */}
            {icon.includes('fa-') ? <i className={icon}></i> : icon}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-bold mb-3 text-charcoal-navy group-hover:text-charcoal-navy/90 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        {/* Animated underline */}
        <motion.div 
          className={`h-1 w-16 bg-gradient-to-r ${color.accent} rounded-full mb-4`}
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Description */}
        <motion.p
          className="text-charcoal-navy/70 leading-relaxed mb-4 flex-grow text-base"
        >
          {description}
        </motion.p>

        {/* Learn More Link */}
        <motion.div
          className={`flex items-center ${color.text} font-semibold text-sm mt-2 cursor-pointer`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
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
    icon: string;
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
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={idx}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between items-center mt-8 px-4">
        <div className="flex gap-2">
          {/* Progress indicator */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-crimson-pink"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <p className="text-sm text-charcoal-navy/60">
            {currentIndex + 1} / {features.length - visibleCards + 1}
          </p>
        </div>
        
        <div className="flex gap-2">
          {/* Previous button */}
          <motion.button
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:bg-crimson-pink hover:text-white transition-colors duration-300"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} />
          </motion.button>
          
          {/* Next button */}
          <motion.button
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:bg-crimson-pink hover:text-white transition-colors duration-300"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}