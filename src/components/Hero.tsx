
import { Shield, Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Professional Safety Nets</span>
              <br />
              for Every Need
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We specialize in high-quality safety nets for construction, residential, and industrial use. 
              Safety, durability, and customer satisfaction are our top priorities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                View Our Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="px-8 py-3"
              >
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">11+</div>
              <div className="text-sm text-muted-foreground">Safety Solutions</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Quality Guarantee</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
