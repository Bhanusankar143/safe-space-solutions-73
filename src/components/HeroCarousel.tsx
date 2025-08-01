
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Home, Bug, Shirt, Bird, Baby, Heart, Building, Wrench, Trophy, Zap, MessageCircle } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    id: 2,
    title: "Invisible Grills",
    slug: "invisible-grills",
    icon: Home,
    image: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png",
  },
  {
    id: 1,
    title: "Balcony Safety Net",
    slug: "balcony-safety-net",
    icon: Shield,
    image: "/lovable-uploads/cd42986b-78e7-4377-aeae-51b108e1381d.png",
  },
  {
    id: 3,
    title: "Mosquito Nets",
    slug: "mosquito-nets",
    icon: Bug,
    image: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png",
  },
  {
    id: 4,
    title: "Hanger Cloth",
    slug: "hanger-cloth",
    icon: Shirt,
    image: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png",
  },
  {
    id: 5,
    title: "Anti Bird Nets",
    slug: "anti-bird-nets",
    icon: Bird,
    image: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png",
  },
  {
    id: 6,
    title: "Children Safety Nets",
    slug: "children-safety-nets",
    icon: Baby,
    image: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png",
  },
  {
    id: 7,
    title: "Pet Safety Nets",
    slug: "pet-safety-nets",
    icon: Heart,
    image: "/lovable-uploads/c39dc420-c442-4d33-aeef-5d9413f9e5cb.png",
  },
  {
    id: 8,
    title: "Building Safety Nets",
    slug: "building-safety-nets",
    icon: Building,
    image: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png",
  },
  {
    id: 9,
    title: "Duct Area Safety Nets",
    slug: "duct-area-safety-nets",
    icon: Wrench,
    image: "/lovable-uploads/d4960c51-244a-4b4e-81e0-c1b9bc18c852.png",
  },
  {
    id: 10,
    title: "All Sports Nets",
    slug: "all-sports-nets",
    icon: Trophy,
    image: "/lovable-uploads/dca8eefc-40db-4a77-9eda-1f053e012afa.png",
  },
  {
    id: 11,
    title: "Pigeon Spikes",
    slug: "pigeon-spikes",
    icon: Zap,
    image: "/lovable-uploads/ed9c3efa-c03d-414b-9297-6e60b56796f1.png",
  }
];

const HeroCarousel = () => {
  const navigate = useNavigate();
  const plugin = React.useRef(
    Autoplay({ 
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Hi! I'm interested in ${serviceTitle}. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactUs = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full h-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="h-full">
          {services.map((service) => (
            <CarouselItem key={service.id} className="h-full basis-full">
              <div className="relative min-h-screen w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover scale-105 filter brightness-110 contrast-110 saturate-110"
                    style={{ 
                      imageRendering: 'crisp-edges',
                      transform: 'translateZ(0)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40"></div>
                </div>

                {/* Main Content - Positioned to the right */}
                <div className="relative z-10 h-full flex items-center justify-end pr-4 md:pr-8 lg:pr-16">
                  <div className="text-right text-white max-w-sm md:max-w-md lg:max-w-lg">
                    <div className="mb-6">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                        {service.title}
                      </h1>
                      <p className="text-sm md:text-base text-gray-200 max-w-xs md:max-w-md">
                        Professional installation and maintenance services for your safety needs.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-end">
                      <Button 
                        size="lg"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 text-sm md:text-base shake-continuous"
                        onClick={() => handleWhatsApp(service.title)}
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp Now →
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm"
                        onClick={handleContactUs}
                      >
                        Contact Us →
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {services.map((_, index) => (
                    <div 
                      key={index}
                      className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/70 transition-colors cursor-pointer"
                    ></div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-6 bg-white/20 border-white/30 text-white hover:bg-white/30 w-12 h-12" />
        <CarouselNext className="right-4 md:right-6 bg-white/20 border-white/30 text-white hover:bg-white/30 w-12 h-12" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
