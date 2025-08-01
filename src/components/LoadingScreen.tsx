import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Delay to allow fade out animation
    }, 2500); // Show loading screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center animate-fade-out pointer-events-none">
        <div className="text-center">
          <img 
            src="/lovable-uploads/56945522-73a1-43ff-9574-df24370328b2.png" 
            alt="Jaidev Safety Nets Logo" 
            className="w-64 h-auto mx-auto animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/56945522-73a1-43ff-9574-df24370328b2.png" 
          alt="Jaidev Safety Nets Logo" 
          className="w-64 h-auto mx-auto animate-bounce"
        />
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;