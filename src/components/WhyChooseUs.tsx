
import { Award, Users, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Wrench,
      title: "Skilled Technicians",
      description: "Skilled technicians ensure expert, efficient solutions with precision and reliability."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Guaranteed top-quality standards ensure durability and complete customer satisfaction."
    },
    {
      icon: Users,
      title: "Your Trusted Partner",
      description: "Your trusted partner, delivering excellence and reliability every step."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Our Invisible Grill & Safety Nets Fixing provides safety anywhere there is an unsafe height presence.
          </h3>
          <p className="text-lg opacity-90">
            Professional installation • Quality materials • Expert service
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
