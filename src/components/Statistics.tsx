
import { Users, Award, Clock, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Users,
      number: 2000,
      suffix: "+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: 5000,
      suffix: "+",
      label: "Installations"
    },
    {
      icon: Clock,
      number: 8,
      suffix: "+",
      label: "Years Experience"
    },
    {
      icon: Wrench,
      number: 24,
      suffix: "/7",
      label: "Support"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000; // 2 seconds
      const stepTime = 50; // Update every 50ms
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, stepTime);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQsNHMtMiw0LTQsNHMtNC0yLTQtNHptMC0yYzAtNCA0LTggOC04czgsMTAgOCw4Yy0yIDAtNi0yLTgtMnMtOCwuLTgtNHptMC0yYzEwLTQsMTAtOCwxMC04czIsNCA0LDRzNCwwIDQtMnMtMi00LTQtNHMtNCwyLTQsNHMtMiw0LTQsNHMtNCwwLTQtMnMtMi00LTQtNHMtMiw0LTQsNHMtMiwwLTItMnMtNC0yLTQtNHMtMiwwLTIsMnMtNCwyLTQsNHM0LDQgNCw0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2IC0zMikiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-accent">Success</span> in Numbers
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Trusted by thousands for professional safety net installations across Karmanghat, Hyderabad
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center text-white group ${isVisible ? 'animate-counter-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 pulse-glow">
                <stat.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {isVisible ? counts[index] : 0}{stat.suffix}
              </h3>
              <p className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
