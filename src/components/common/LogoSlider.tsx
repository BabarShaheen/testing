// components/common/LogoSlider.tsx
import { OptimizedImage } from './OptimizedImage';

const logos = [
  '/Images/slider/2_optimized.png',
  '/Images/slider/3_optimized.png',
  '/Images/slider/4_optimized.png',
  '/Images/slider/5_optimized.png',
  '/Images/slider/6_optimized.png',
  '/Images/slider/7_optimized.png',
  '/Images/slider/8_optimized.png',
  '/Images/slider/9_optimized.png',
  '/Images/slider/10_optimized.png',
  '/Images/slider/11_optimized.png',
  '/Images/slider/12_optimized.png',
  '/Images/slider/13_optimized.png',
];

export default function LogoSlider() {
  return (
    <div className="overflow-hidden py-5 bg-gray-50">
      <div className="animate-slide flex items-center gap-8">
        {logos.map((src, idx) => (
          <OptimizedImage
            key={idx}
            src={src}
            alt={`Logo ${idx + 1}`}
            className="h-16 w-auto inline-block"
            sizes="64px"
            priority={idx < 6} // Prioritize first 6 logos
          />
        ))}

        {/* Duplicate logos for infinite loop feel */}
        {logos.map((src, idx) => (
          <OptimizedImage
            key={`dup-${idx}`}
            src={src}
            alt={`Logo duplicate ${idx + 1}`}
            className="h-16 w-auto inline-block"
            sizes="64px"
            priority={false}
          />
        ))}
      </div>
    </div>
  );
}
