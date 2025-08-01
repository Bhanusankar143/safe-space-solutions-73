
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Home, Bug, Shirt, Bird, Baby, Heart, Building, Wrench, Trophy, Zap, Calendar, Phone, MessageCircle } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const services = [
  {
    id: 2,
    title: "Invisible Grills",
    slug: "invisible-grills",
    icon: Home,
    image: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png",
    shortDescription: "Premium invisible grills for modern homes - safety without blocking your view."
  },
  {
    id: 1,
    title: "Balcony Safety Net",
    slug: "balcony-safety-net",
    icon: Shield,
    image: "/lovable-uploads/cd42986b-78e7-4377-aeae-51b108e1381d.png",
    shortDescription: "Strong and durable balcony safety nets to protect your loved ones from high-rise accidents."
  },
  {
    id: 3,
    title: "Mosquito Nets",
    slug: "mosquito-nets",
    icon: Bug,
    image: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png",
    shortDescription: "High-quality mosquito nets for doors, windows, and beds to keep insects away."
  },
  {
    id: 4,
    title: "Hanger Cloth",
    slug: "hanger-cloth",
    icon: Shirt,
    image: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png",
    shortDescription: "Space-saving cloth drying hanger systems for modern homes and apartments."
  },
  {
    id: 5,
    title: "Anti Bird Nets",
    slug: "anti-bird-nets",
    icon: Bird,
    image: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png",
    shortDescription: "Durable anti-bird nets to protect balconies from pigeons and other birds."
  },
  {
    id: 6,
    title: "Children Safety Nets",
    slug: "children-safety-nets",
    icon: Baby,
    image: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png",
    shortDescription: "Strong children safety nets for balconies, windows, and staircases."
  },
  {
    id: 7,
    title: "Pet Safety Nets",
    slug: "pet-safety-nets",
    icon: Heart,
    image: "/lovable-uploads/c39dc420-c442-4d33-aeef-5d9413f9e5cb.png",
    shortDescription: "Reliable pet safety nets for balconies and open spaces to keep pets secure."
  },
  {
    id: 8,
    title: "Building Safety Nets",
    slug: "building-safety-nets",
    icon: Building,
    image: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png",
    shortDescription: "High-strength building safety nets for construction and maintenance sites."
  },
  {
    id: 9,
    title: "Duct Area Safety Nets",
    slug: "duct-area-safety-nets",
    icon: Wrench,
    image: "/lovable-uploads/d4960c51-244a-4b4e-81e0-c1b9bc18c852.png",
    shortDescription: "Secure duct area safety nets for apartments and high-rise buildings."
  },
  {
    id: 10,
    title: "All Sports Nets",
    slug: "all-sports-nets",
    icon: Trophy,
    image: "/lovable-uploads/dca8eefc-40db-4a77-9eda-1f053e012afa.png",
    shortDescription: "High-quality sports nets for cricket, football, volleyball, and other games."
  },
  {
    id: 11,
    title: "Pigeon Spikes",
    slug: "pigeon-spikes",
    icon: Zap,
    image: "/lovable-uploads/ed9c3efa-c03d-414b-9297-6e60b56796f1.png",
    shortDescription: "Effective pigeon spikes to keep unwanted birds away from your property."
  }
];

const ServicesCarousel = () => {
  const navigate = useNavigate();
  const plugin = React.useRef(
    Autoplay({ 
      delay: 2500, // Auto-slide every 2.5 seconds
      stopOnInteraction: true, // Stop when user interacts
      stopOnMouseEnter: true, // Stop when mouse hovers
      playOnInit: true // Start playing immediately
    })
  );

  const handleServiceClick = (slug: string) => {
    navigate(`/service/${slug}`);
  };

  const handleBookNow = (serviceTitle: string) => {
    const message = `Hi! I'm interested in ${serviceTitle}. Could you please provide more details and a quote?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917606914368';
  };

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Hi! I'm interested in ${serviceTitle}. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Safety Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our comprehensive range of safety net services
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true, // Enable infinite loop
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()} // Pause on hover
            onMouseLeave={() => plugin.current.play()} // Resume when not hovering
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 p-2 rounded-full">
                          <service.icon className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          {service.shortDescription}
                        </p>
                        
                        {/* Book Now Section */}
                        <div className="space-y-3 border-t pt-4">
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="flex-1 bg-primary hover:bg-primary/90 shake-on-hover"
                              onClick={() => handleBookNow(service.title)}
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              Book Now
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="shake-on-hover"
                              onClick={handleCall}
                            >
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="bg-green-500 text-white hover:bg-green-600 border-green-500 shake-on-hover"
                              onClick={() => handleWhatsApp(service.title)}
                            >
                              <MessageCircle className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full text-primary hover:text-primary hover:bg-primary/10"
                            onClick={() => handleServiceClick(service.slug)}
                          >
                            Learn More →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
