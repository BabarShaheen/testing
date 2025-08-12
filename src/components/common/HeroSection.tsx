import { Button } from '../ui/button';
import { Sparkles, ArrowRight, BookOpen, Star, Search } from 'lucide-react';

interface UniqueHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onButtonClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  title,
  subtitle,
  description,
  badge,
  primaryButtonText = 'Explore Now',
  secondaryButtonText,
  onButtonClick,
  onSecondaryClick,
}: UniqueHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1C1F2A] text-white min-h-screen flex items-center">
      {/* Background Wave SVG */}


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
              onClick={onButtonClick}
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
