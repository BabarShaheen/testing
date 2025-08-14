import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-orange`} />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-[#1C1F2A] z-50 flex items-center justify-center">
      <div className="text-center max-w-md px-6 flex flex-col items-center">
        <div className="mb-8 flex items-center justify-center h-28 w-full">
          <div className="w-28 h-28 border-4 border-[#ed2568] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Citrix Consulting</h2>
        <p className="text-xl text-white/90 mb-2">Your Compliance Partner</p>
        <p className="text-sm text-white/70 mb-6 max-w-sm">Transforming regulatory challenges into business advantages</p>
        
        <div className="flex justify-center items-center space-x-2 mb-2">
          <span className="text-white/80 mr-1">Preparing your compliance journey</span>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-[#ed2568] rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-[#ed2568] rounded-full animate-pulse delay-150"></span>
            <span className="w-2 h-2 bg-[#ed2568] rounded-full animate-pulse delay-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}