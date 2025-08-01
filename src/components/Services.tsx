
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Phone, Shield, Home, Bug, Shirt, Bird, Baby, Heart, Building, Wrench, Trophy, Zap, MessageCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 2,
    title: "Invisible Grills",
    slug: "invisible-grills",
    description: "Premium invisible grills for balconies and windows. High-tensile stainless steel with anti-rust coating. Safe for children and pets.",
    icon: Home,
    image: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png"
  },
  {
    id: 1,
    title: "Balcony Safety Net",
    slug: "balcony-safety-net",
    description: "Strong and durable balcony safety nets to protect your loved ones. Weather-resistant, discreet, and professionally installed for maximum safety.",
    icon: Shield,
    image: "/lovable-uploads/cd42986b-78e7-4377-aeae-51b108e1381d.png"
  },
  {
    id: 3,
    title: "Mosquito Nets",
    slug: "mosquito-nets",
    description: "High-quality mosquito nets for doors, windows, and beds. Durable, breathable, and easy to maintain for daily comfort.",
    icon: Bug,
    image: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png"
  },
  {
    id: 4,
    title: "Hanger Cloth",
    slug: "hanger-cloth",
    description: "Space-saving cloth drying hanger systems. Pulley-based hangers that are rust-free, durable, and perfect for modern homes.",
    icon: Shirt,
    image: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png"
  },
  {
    id: 5,
    title: "Anti Bird Nets",
    slug: "anti-bird-nets",
    description: "Durable anti-bird nets to protect balconies from pigeons. UV-resistant, weatherproof, and safe for birds.",
    icon: Bird,
    image: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png"
  },
  {
    id: 6,
    title: "Children Safety Nets",
    slug: "children-safety-nets",
    description: "Strong children safety nets for balconies and windows. High-quality, tear-resistant materials with expert installation.",
    icon: Baby,
    image: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png"
  },
  {
    id: 7,
    title: "Pet Safety Nets",
    slug: "pet-safety-nets",
    description: "Reliable pet safety nets for balconies and windows. Strong, durable, and pet-friendly materials with professional installation.",
    icon: Heart,
    image: "/lovable-uploads/c39dc420-c442-4d33-aeef-5d9413f9e5cb.png"
  },
  {
    id: 8,
    title: "Building Safety Nets",
    slug: "building-safety-nets",
    description: "High-strength building safety nets for construction sites. Weather-resistant, UV-protected, and meets industry standards.",
    icon: Building,
    image: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png"
  },
  {
    id: 9,
    title: "Duct Area Safety Nets",
    slug: "duct-area-safety-nets",
    description: "Secure duct area safety nets for apartments. Weather-resistant materials with custom-fitted professional installation.",
    icon: Wrench,
    image: "/lovable-uploads/d4960c51-244a-4b4e-81e0-c1b9bc18c852.png"
  },
  {
    id: 10,
    title: "All Sports Nets",
    slug: "all-sports-nets",
    description: "High-quality sports nets for all indoor and outdoor games. Durable, weather-resistant materials with professional installation.",
    icon: Trophy,
    image: "/lovable-uploads/dca8eefc-40db-4a77-9eda-1f053e012afa.png"
  },
  {
    id: 11,
    title: "Pigeon Spikes",
    slug: "pigeon-spikes",
    description: "Durable pigeon spikes to keep birds away. Made from rust-proof stainless steel. Humane and maintenance-free solution.",
    icon: Zap,
    image: "/lovable-uploads/ed9c3efa-c03d-414b-9297-6e60b56796f1.png"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNow = (serviceName: string) => {
    const message = `Hi! I'm interested in ${serviceName}. Could you please provide more details and a quote?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi! I'm interested in ${serviceName}. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917606914368';
  };

  const handleLearnMore = (slug: string) => {
    navigate(`/service/${slug}`);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Safety Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive safety net services for residential, commercial, and industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 line-clamp-2">
                  {service.description.split('.')[0]}.
                </CardDescription>
                
                <div className="space-y-3 border-t pt-4">
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 shake-on-hover"
                      onClick={() => handleBookNow(service.title)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="shake-on-hover"
                      onClick={handleCall}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-green-500 text-white hover:bg-green-600 border-green-500 shake-on-hover"
                      onClick={() => handleWhatsApp(service.title)}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => handleLearnMore(service.slug)}
                  >
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
