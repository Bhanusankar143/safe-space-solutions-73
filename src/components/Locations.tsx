import { useState } from 'react';
import { MapPin, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Locations = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const locations = [
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      description: 'Headquarters with full-service installation team',
      cities: ['Hyderabad', 'Secunderabad', 'Cyberabad', 'Karmanghat', 'Dilsukhnagar']
    },
    {
      id: 'andhra-pradesh',
      name: 'Andhra Pradesh',
      description: 'Headquarters with full-service installation team',
      cities: ['Vijayawada', 'Visakhapatnam', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati']
    },
    {
      id: 'telangana',
      name: 'Telangana',
      description: 'Complete safety net solutions across the state',
      cities: ['Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Mahabubnagar', 'Adilabad']
    },
    {
      id: 'kerala',
      name: 'Kerala',
      description: 'Expert teams in Kochi and Trivandrum',
      cities: ['Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha']
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      description: 'Professional installation services',
      cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Vellore']
    }
  ];

  const handleContactASK = () => {
    window.location.href = 'tel:+919861221105';
  };

  const handleWhatsAppASK = () => {
    const message = "Hi! I'm interested in your services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/919861221105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Serving across South India
          </p>
        </div>

        {selectedState ? (
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedState(null)}
              className="mb-6 text-primary hover:text-primary/80"
            >
              ← Back to All Locations
            </Button>
            
            <Card className="backdrop-blur-sm bg-card/80 border border-border/50 shadow-luxury">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  {locations.find(loc => loc.id === selectedState)?.name} - Major Cities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {locations.find(loc => loc.id === selectedState)?.cities.map((city, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border/30 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-foreground">{city}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button onClick={scrollToContact} className="bg-gradient-primary text-white hover:shadow-soft">
                    Contact Branch <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location) => (
              <Card 
                key={location.id}
                className="group cursor-pointer backdrop-blur-sm bg-card/80 border border-border/50 hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedState(location.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors font-medium">
                    Contact Branch <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* ASK Solutions Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border/30">
          <p className="text-muted-foreground mb-4">
            All Rights Reserved. Designed by{' '}
            <span className="relative group cursor-pointer">
              <span 
                className="text-primary font-semibold hover:text-accent transition-colors"
                onClick={handleContactASK}
              >
                ASK Solutions
              </span>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-card border border-border/50 rounded-xl p-4 shadow-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto whitespace-nowrap">
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    onClick={handleContactASK}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppASK}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2">+91 98612 21105</div>
              </div>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;