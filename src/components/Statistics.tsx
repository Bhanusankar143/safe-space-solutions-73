
import { Users, Award, Clock, Wrench } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: "1000+",
      label: "Installations"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: Wrench,
      number: "24/7",
      label: "Support"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
