import { Button } from '../ui/button';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ContactCTA({
  title,
  description,
  buttonText = "Contact Us",
  onButtonClick,
  className = "",
}: ContactCTAProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
            <Button
              onClick={onButtonClick}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 