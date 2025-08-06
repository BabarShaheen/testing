// components/common/LogoSlider.tsx
const logos = [
  '/Images/slider/2.png',
  '/Images/slider/3.png',
  '/Images/slider/4.png',
  '/Images/slider/5.png',
  '/Images/slider/6.png',
  '/Images/slider/7.png',
  '/Images/slider/8.png',
  '/Images/slider/9.png',
  '/Images/slider/10.png',
  '/Images/slider/11.png',
  '/Images/slider/12.png',
  '/Images/slider/13.png',
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
