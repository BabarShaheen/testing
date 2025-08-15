// components/common/FeatureSlider.tsx
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  index: number;
  isVisible?: boolean;
};

const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
  // Color scheme based on index
  const colors = [
    {
      text: 'text-crimson-pink',
      gradient: 'from-crimson-pink to-vivid-red',
    },
    {
      text: 'text-vivid-red',
      gradient: 'from-vivid-red to-warm-amber',
    },
    {
      text: 'text-warm-amber',
      gradient: 'from-warm-amber to-crimson-pink',
    },
  ];
  const color = colors[index % colors.length];

  return (
    <div className="group relative w-full flex-shrink-0">
      <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden h-full flex flex-col border border-gray-100 min-h-[320px] hover:shadow-xl transition-shadow duration-300">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-charcoal-navy leading-tight">
          {title}
        </h3>

        {/* Accent line */}
        <div
          className={`h-1 w-16 bg-gradient-to-r ${color.gradient} rounded-full mb-4`}
        />

        {/* Description */}
        <div className="mb-4 flex-grow">
          <p className="text-charcoal-navy/70 leading-relaxed">{description}</p>
        </div>

        {/* Learn More Link */}
        <div
          className={`flex items-center ${color.text} font-semibold text-sm mt-auto cursor-pointer hover:underline`}
        >
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </div>
      </div>
    </div>
  );
};

type FeatureSliderProps = {
  features: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
  mobileConfig?: {
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    dots?: boolean;
    infinite?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
  };
};

export default function FeatureSlider({
  features,
  className = '',
  mobileConfig,
}: FeatureSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(
    mobileConfig?.autoplay ?? true
  );
  const autoPlayRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Calculate visible cards based on screen width
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCards(mobileConfig?.slidesToShow ?? 1);
      setIsMobile(true);
    } else if (width < 1024) {
      setVisibleCards(2);
      setIsMobile(false);
    } else {
      setVisibleCards(3);
      setIsMobile(false);
    }
  }, [mobileConfig?.slidesToShow]);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [updateVisibleCards]);

  // Auto-play functionality
  const handleNext = useCallback(() => {
    if (mobileConfig?.infinite !== false) {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    } else {
      setCurrentIndex((prev) =>
        prev >= features.length - visibleCards ? 0 : prev + 1
      );
    }
  }, [features.length, visibleCards, mobileConfig?.infinite]);

  const handlePrev = useCallback(() => {
    if (mobileConfig?.infinite !== false) {
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? features.length - visibleCards : prev - 1
      );
    }
  }, [features.length, visibleCards, mobileConfig?.infinite]);

  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = window.setInterval(() => {
        handleNext();
      }, mobileConfig?.autoplaySpeed ?? 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [
    currentIndex,
    isAutoPlaying,
    isDragging,
    handleNext,
    mobileConfig?.autoplaySpeed,
  ]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
      if (isAutoPlaying) {
        autoPlayRef.current = window.setInterval(() => {
          handleNext();
        }, mobileConfig?.autoplaySpeed ?? 5000);
      }
    }
  }, [isAutoPlaying, handleNext, mobileConfig?.autoplaySpeed]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Touch/drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    pauseAutoPlay();
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !isMobile) return;

    const clientX =
      'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragStart - clientX;
    const threshold = 50;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setIsDragging(false);
    resumeAutoPlay();
    resetAutoPlay();
  };

  // Calculate transform
  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    const cardWidth = 100 / visibleCards;
    const maxIndex = features.length - visibleCards;
    const clampedIndex = Math.min(currentIndex, maxIndex);
    return `translateX(-${clampedIndex * cardWidth}%)`;
  };

  const totalSlides = isMobile
    ? features.length
    : Math.max(1, features.length - visibleCards + 1);
  const progressPercentage =
    totalSlides > 1 ? (currentIndex / (totalSlides - 1)) * 100 : 100;

  return (
    <div
      className={`relative w-full py-8 ${className}`}
      onMouseEnter={!isMobile ? pauseAutoPlay : undefined}
      onMouseLeave={!isMobile ? resumeAutoPlay : undefined}
    >
      {/* Main slider container */}
      <div className="overflow-hidden relative">
        <div
          className={`flex ${
            isMobile ? '' : 'gap-6'
          } transition-transform duration-500 ease-in-out`}
          style={{
            transform: getTransform(),
          }}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={
                isMobile
                  ? 'w-full flex-shrink-0 px-2'
                  : `w-full max-w-sm mx-auto flex-shrink-0`
              }
              style={
                !isMobile
                  ? {
                      width: `calc(${100 / visibleCards}% - ${
                        (visibleCards - 1) * 24
                      }px / ${visibleCards})`,
                    }
                  : undefined
              }
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                index={idx}
                isVisible={!isMobile || Math.abs(idx - currentIndex) <= 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-4 gap-4 sm:gap-0">
        {/* Progress section */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex-1 sm:w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-crimson-pink to-vivid-red transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-charcoal-navy/60 font-medium whitespace-nowrap">
            {currentIndex + 1} / {totalSlides}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                idx === currentIndex ? 'bg-crimson-pink' : 'bg-gray-300'
              }`}
              onClick={() => {
                setCurrentIndex(idx);
                resetAutoPlay();
              }}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        {(mobileConfig?.arrows !== false || !isMobile) && (
          <div className="flex gap-2">
            <button
              className="w-10 h-10 bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={handlePrev}
            >
              <ArrowLeft size={18} />
            </button>

            <button
              className="w-10 h-10 bg-white shadow-md flex items-center justify-center text-charcoal-navy hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={handleNext}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
