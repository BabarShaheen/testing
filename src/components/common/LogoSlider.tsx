// components/common/LogoSlider.tsx
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
  return (
    <div className="overflow-hidden py-5 bg-gray-50">
      <div className=" animate-slide flex items-center gap-8">
        {logos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Logo ${idx + 1}`}
            className="h-16 w-auto inline-block transition duration-300"
          />
        ))}

        {/* Duplicate logos for infinite loop feel */}
        {logos.map((src, idx) => (
          <img
            key={`dup-${idx}`}
            src={src}
            alt={`Logo duplicate ${idx + 1}`}
            className="h-16 w-auto inline-block transition duration-30000"
          />
        ))}
      </div>
    </div>
  );
}
