import React from 'react';
import { Button } from '../ui/button';
import { Sparkles, ArrowRight, BookOpen, Star, Search } from 'lucide-react';

interface UniqueHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  title,
  subtitle,
  description,
  badge,
  primaryButtonText = 'Explore Now',
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: UniqueHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1C1F2A] text-white min-h-screen flex items-center">
      {/* Background Wave SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ED2568"
            fillOpacity="0.2"
            d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,181.3C560,181,640,203,720,224C800,245,880,267,960,240C1040,213,1120,139,1200,106.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl space-y-6 text-left">
          {badge && (
            <div className="inline-flex items-center px-4 py-1 bg-pink-600/10 text-pink-300 rounded-full text-sm font-semibold tracking-wide shadow-md mb-2">
              <Sparkles className="w-4 h-4 mr-2" />
              {badge}
            </div>
          )}

          {subtitle && (
            <h4 className="text-pink-200 text-xl font-medium tracking-wide">
              {subtitle}
            </h4>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={onPrimaryClick}
              className="bg-gradient-to-r from-[#ED2568] to-[#EE343B] text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              {primaryButtonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {secondaryButtonText && (
              <Button
                onClick={onSecondaryClick}
                variant="outline"
                className="border-white/30 text-white hover:text-pink-300 hover:border-pink-300 transition-all px-8 py-3 text-lg rounded-xl"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {/* Icon Row or Graphic */}
        <div className="hidden lg:flex flex-col items-end justify-center gap-8">
          {[BookOpen, Star, Search].map((Icon, i) => (
            <div
              key={i}
              className="p-4 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <Icon className="w-6 h-6 text-pink-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
