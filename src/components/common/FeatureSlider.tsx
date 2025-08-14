// components/common/FeatureSlider.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type FeatureCardProps = {
  icon: string;
  badge: string;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, badge, title, description, index }: FeatureCardProps) => {
  // Determine color based on index
  const colors = [
    { bg: 'bg-crimson-pink/10', accent: 'bg-crimson-pink/20', text: 'text-crimson-pink', hover: 'group-hover:bg-crimson-pink/30' },
    { bg: 'bg-warm-amber/10', accent: 'bg-warm-amber/20', text: 'text-warm-amber', hover: 'group-hover:bg-warm-amber/30' },
    { bg: 'bg-vivid-red/10', accent: 'bg-vivid-red/20', text: 'text-vivid-red', hover: 'group-hover:bg-vivid-red/30' },
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
        className={`bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden h-full flex flex-col`}
        whileHover={{
          boxShadow: '0 25px 50px -12px rgba(238, 52, 59, 0.15)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Badge */}
        <motion.div 
          className={`inline-block ${color.bg} ${color.hover} px-3 py-1 rounded-full text-xs font-medium ${color.text} mb-4 self-start transition-colors duration-300`}
          whileHover={{ scale: 1.05, x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {badge}
        </motion.div>
        
        {/* Icon */}
        <motion.div 
          className={`w-12 h-12 ${color.bg} ${color.hover} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <i className={`${icon} ${color.text} text-xl`}></i>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold mb-3 text-charcoal-navy group-hover:text-charcoal-navy/90 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-charcoal-navy/70 leading-relaxed mb-4 flex-grow"
        >
          {description}
        </motion.p>

        {/* Learn More Link */}
        <motion.div
          className={`flex items-center ${color.text} font-medium text-sm mt-2 cursor-pointer`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1 h-3 w-3" />
        </motion.div>

        {/* Corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-24 h-24 ${color.accent} rounded-bl-full -z-10`}
          initial={{ scale: 0.6, opacity: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 15, opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

type FeatureSliderProps = {
  features: Array<{
    icon: string;
    badge: string;
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
              badge={feature.badge}
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