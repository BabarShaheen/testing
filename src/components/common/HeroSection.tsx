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
    <section className="relative overflow-hidden bg-gradient-to-br from-charcoal-navy to-charcoal-navy/95 text-white py-24">
      {/* Decorative soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-crimson-pink/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-warm-amber/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6 text-left">
          {badge && (
            <div className="inline-flex items-center px-4 py-1 bg-crimson-pink/10 text-crimson-pink rounded-full text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              {badge}
            </div>
          )}

          {subtitle && (
            <h4 className="text-soft-lavender-grey text-xl font-medium tracking-wide">
              {subtitle}
            </h4>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-off-white/80 leading-relaxed">
            {description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={onPrimaryClick}
              className="bg-crimson-gradient text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-crimson-pink/30 transition-all"
            >
              {primaryButtonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {secondaryButtonText && (
              <Button
                onClick={onSecondaryClick}
                variant="outline"
                className="border-soft-lavender-grey/50 text-white hover:text-crimson-pink hover:border-crimson-pink transition-all px-8 py-3 text-lg rounded-xl"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {/* Icon Row or Graphic */}
        <div className="hidden lg:flex flex-col items-end justify-center gap-6">
          {[BookOpen, Star, Search].map((Icon, i) => (
            <div
              key={i}
              className="p-4 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <Icon className="w-6 h-6 text-soft-lavender-grey" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
