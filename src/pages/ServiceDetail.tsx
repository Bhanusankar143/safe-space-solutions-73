import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Phone, MessageCircle, Shield, Home, Bug, Shirt, Bird, Baby, Heart, Building, Wrench, Trophy, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const serviceDetails = {
  "balcony-safety-net": {
    title: "Balcony Safety Net",
    icon: Shield,
    image: "/lovable-uploads/cd42986b-78e7-4377-aeae-51b108e1381d.png",
    shortDescription: "We provide strong and durable balcony safety nets to protect your loved ones. Ideal for homes with children, pets, or high-rise balconies.",
    fullDescription: `We provide strong and durable balcony safety nets to protect your loved ones. Ideal for homes with children, pets, or high-rise balconies. Our nets are weather-resistant, discreet, and easy to maintain. Professional installation ensures maximum safety and a perfect fit. Your balcony's safety is our top priority — safe, secure, and stress-free.

Our balcony safety nets are made from high-quality materials that are:
• UV-resistant and weatherproof
• Invisible from a distance, maintaining your balcony's aesthetics
• Strong enough to withstand impact and pressure
• Easy to clean and maintain
• Custom-fitted for perfect installation

We serve residential complexes, apartments, and individual homes across Karmanghat, Hyderabad and surrounding areas. Our experienced team ensures quick and professional installation with minimal disruption to your daily routine.`,
    features: [
      "High-tensile strength materials",
      "Weather-resistant and UV-protected", 
      "Transparent and aesthetically pleasing",
      "Professional installation service",
      "Custom sizing available",
      "Child and pet safe",
      "5-year warranty included"
    ],
    applications: [
      "High-rise apartment balconies",
      "Residential building terraces", 
      "Children's play areas",
      "Pet-friendly spaces",
      "Swimming pool areas",
      "Rooftop installations"
    ]
  },
  "invisible-grills": {
    title: "Invisible Grills",
    icon: Home,
    image: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png",
    shortDescription: "We specialize in premium invisible grills for balconies, windows, and high-rise safety.",
    fullDescription: `We specialize in premium invisible grills for balconies, windows, and high-rise safety. Designed for modern homes, they offer safety without blocking your view. Made from high-tensile stainless steel with anti-rust coating. Safe for children and pets, with sleek, maintenance-free installation. Experience safety with style — secure your space without compromising beauty.

Our invisible grills provide the perfect combination of safety and aesthetics:
• Made from marine-grade stainless steel
• Completely rust-proof and corrosion-resistant
• Maintains unobstructed views
• Easy emergency exit mechanism
• Professional installation by certified technicians

Perfect for modern homes and commercial buildings where safety meets style.`,
    features: [
      "Marine-grade stainless steel construction",
      "Anti-rust and corrosion-resistant",
      "Maintains clear views",
      "Emergency exit mechanism",
      "Child and pet safe",
      "Low maintenance",
      "10-year warranty"
    ],
    applications: [
      "Apartment windows",
      "Balcony openings",
      "Terrace areas",
      "Commercial buildings",
      "Hotels and resorts",
      "Residential complexes"
    ]
  },
  "mosquito-nets": {
    title: "Mosquito Nets",
    icon: Bug,
    image: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png",
    shortDescription: "We provide high-quality mosquito nets to keep your home safe from insects.",
    fullDescription: `We provide high-quality mosquito nets to keep your home safe from insects. Our nets are durable, breathable, and designed for doors, windows, and beds. Enjoy fresh air without worrying about mosquitoes or bugs. Easy to install, clean, and maintain for daily comfort. Sleep peacefully — with protection that lasts.

Our mosquito nets offer comprehensive protection:
• Fine mesh that blocks even the smallest insects
• Breathable material that allows air circulation
• Available in various sizes and designs
• Easy installation and removal
• Machine washable for easy maintenance

Protect your family from mosquito-borne diseases while enjoying natural ventilation.`,
    features: [
      "Fine mesh protection",
      "Breathable and comfortable",
      "Multiple size options",
      "Easy installation",
      "Machine washable",
      "Durable materials",
      "Cost-effective solution"
    ],
    applications: [
      "Bedroom windows",
      "Door entrances",
      "Bed canopies",
      "Outdoor seating areas",
      "Kitchen windows",
      "Balcony openings"
    ]
  },
  "hanger-cloth": {
    title: "Hanger Cloth",
    icon: Shirt,
    image: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png",
    shortDescription: "We offer strong and space-saving cloth drying hanger systems for modern homes.",
    fullDescription: `We offer strong and space-saving cloth drying hanger systems for modern homes. Perfect for balconies, bathrooms, and utility areas — dry clothes with ease. Our pulley-based hangers are rust-free, durable, and easy to use. Designed to save space while providing maximum drying capacity. Smart drying solutions for clean, clutter-free living.

Our cloth drying systems are engineered for efficiency:
• Pulley mechanism for easy operation
• Rust-proof materials and coating
• Space-saving design
• High weight capacity
• Suitable for indoor and outdoor use
• Professional installation included

Make laundry day easier with our innovative drying solutions.`,
    features: [
      "Pulley-based operation",
      "Rust-proof construction",
      "Space-saving design",
      "High weight capacity",
      "Easy to operate",
      "Indoor/outdoor suitable",
      "Professional installation"
    ],
    applications: [
      "Apartment balconies",
      "Utility rooms",
      "Bathrooms",
      "Terrace areas",
      "Laundry rooms",
      "Service areas"
    ]
  },
  "anti-bird-nets": {
    title: "Anti Bird Nets",
    icon: Bird,
    image: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png",
    shortDescription: "We provide durable and reliable anti-bird nets to protect your balconies from pigeons and other birds.",
    fullDescription: `We provide durable and reliable anti-bird nets to protect your balconies from pigeons and other birds. Our nets are UV-resistant, weatherproof, and safe for birds — no harm, just protection. Ideal for homes, apartments, and commercial buildings. Installed by experts to ensure a neat and secure finish. Keep your balcony clean, hygienic, and bird-free — the smart way.

Our anti-bird nets provide humane bird control:
• Made from bird-safe materials
• UV-resistant for long-lasting protection
• Transparent and barely visible
• Easy to clean and maintain
• Professional installation service
• Suitable for all building types

Protect your property while being kind to wildlife.`,
    features: [
      "Bird-safe materials",
      "UV-resistant and weatherproof",
      "Transparent design",
      "Humane bird control",
      "Easy maintenance",
      "Professional installation",
      "Long-lasting protection"
    ],
    applications: [
      "Balcony protection",
      "Building facades",
      "Rooftop areas",
      "Air conditioning units",
      "Solar panel protection",
      "Commercial buildings"
    ]
  },
  "children-safety-nets": {
    title: "Children Safety Nets",
    icon: Baby,
    image: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png",
    shortDescription: "We specialize in strong and secure children safety nets for balconies, windows, and staircases.",
    fullDescription: `We specialize in strong and secure children safety nets for balconies, windows, and staircases. Designed to prevent accidental falls and ensure complete child protection at home. Our nets are made from high-quality, tear-resistant materials. Expert installation ensures safety without compromising aesthetics. Protect what matters most — safety nets for your child's safe space.

Our children safety nets provide peace of mind:
• Extra-strong materials designed for child safety
• Tear-resistant and impact-proof
• Soft edges to prevent injury
• Transparent design that doesn't obstruct views
• Tested to meet international safety standards
• Professional installation with safety guarantee

Your child's safety is our priority.`,
    features: [
      "Extra-strong materials",
      "Tear and impact resistant",
      "Soft, child-safe edges",
      "Transparent design",
      "Safety certified",
      "Professional installation",
      "Peace of mind guarantee"
    ],
    applications: [
      "Balcony railings",
      "Staircase openings",
      "Window areas",
      "Terrace boundaries",
      "Play areas",
      "Swimming pool areas"
    ]
  },
  "pet-safety-nets": {
    title: "Pet Safety Nets",
    icon: Heart,
    image: "/lovable-uploads/c39dc420-c442-4d33-aeef-5d9413f9e5cb.png",
    shortDescription: "We provide reliable pet safety nets for balconies, windows, and open spaces.",
    fullDescription: `We provide reliable pet safety nets for balconies, windows, and open spaces. Designed to prevent pets from accidental falls or escapes in high-rise buildings. Made with strong, durable, and pet-friendly materials. Our nets are discreet, weatherproof, and professionally installed. Keep your furry friends safe — without limiting their freedom.

Our pet safety nets ensure your pets' security:
• Pet-friendly materials that won't harm paws or claws
• Strong enough to contain even large pets
• Weather-resistant for outdoor installations
• Transparent design maintains aesthetics
• Easy to clean and maintain
• Professional installation service

Let your pets enjoy outdoor spaces safely.`,
    features: [
      "Pet-friendly materials",
      "Strong containment",
      "Weather-resistant",
      "Transparent design",
      "Easy maintenance",
      "Professional installation",
      "Suitable for all pet sizes"
    ],
    applications: [
      "Pet balconies",
      "Window openings",
      "Terrace areas",
      "Garden boundaries",
      "Pet play areas",
      "Veterinary clinics"
    ]
  },
  "building-safety-nets": {
    title: "Building Safety Nets",
    icon: Building,
    image: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png",
    shortDescription: "We offer high-strength building safety nets for construction and maintenance sites.",
    fullDescription: `We offer high-strength building safety nets for construction and maintenance sites. Designed to prevent accidents, falling debris, and ensure worker safety. Our nets are weather-resistant, UV-protected, and meet industry safety standards. Ideal for high-rise buildings, renovation works, and large-scale projects. Safety first — protecting lives and property at every level.

Our building safety nets meet industry standards:
• Compliant with construction safety regulations
• High-strength materials for maximum protection
• Weather and UV resistant
• Easy installation and removal
• Suitable for all building heights
• Professional installation by certified technicians

Ensure workplace safety with our reliable solutions.`,
    features: [
      "Industry standard compliance",
      "High-strength materials",
      "Weather and UV resistant",
      "Easy installation",
      "All building heights",
      "Certified installation",
      "Worker safety focus"
    ],
    applications: [
      "Construction sites",
      "Building renovations",
      "Maintenance work",
      "High-rise buildings",
      "Industrial projects",
      "Infrastructure development"
    ]
  },
  "duct-area-safety-nets": {
    title: "Duct Area Safety Nets",
    icon: Wrench,
    image: "/lovable-uploads/d4960c51-244a-4b4e-81e0-c1b9bc18c852.png",
    shortDescription: "We provide strong and secure duct area safety nets for apartments and high-rise buildings.",
    fullDescription: `We provide strong and secure duct area safety nets for apartments and high-rise buildings. These nets prevent objects, waste, or people from falling into open duct spaces. Made from durable, weather-resistant materials for long-lasting protection. Custom-fitted and professionally installed for maximum safety. Keep your duct areas clean, secure, and accident-free.

Our duct area safety nets provide specialized protection:
• Custom-designed for duct dimensions
• Prevents falling objects and accidents
• Weather-resistant materials
• Easy to clean and maintain
• Professional installation service
• Compliant with building safety codes

Secure your building's duct areas effectively.`,
    features: [
      "Custom-fitted design",
      "Accident prevention",
      "Weather-resistant",
      "Easy maintenance",
      "Professional installation",
      "Building code compliant",
      "Durable materials"
    ],
    applications: [
      "Apartment duct areas",
      "Commercial buildings",
      "Hospital duct spaces",
      "Educational institutions",
      "Office complexes",
      "Residential towers"
    ]
  },
  "all-sports-nets": {
    title: "All Sports Nets",
    icon: Trophy,
    image: "/lovable-uploads/dca8eefc-40db-4a77-9eda-1f053e012afa.png",
    shortDescription: "We supply and install high-quality sports nets for all indoor and outdoor games.",
    fullDescription: `We supply and install high-quality sports nets for all indoor and outdoor games. From cricket, football, volleyball, badminton, to golf and tennis, we've got you covered. Our nets are made with durable, weather-resistant materials for long-term performance. Custom sizes and professional installation ensure the perfect fit for every sport. Game on — with safe, strong, and professional-grade sports net solutions.

Our sports nets cater to all sporting needs:
• Available for all major sports
• Professional-grade materials
• Weather-resistant for outdoor use
• Custom sizing available
• Professional installation service
• Suitable for schools, clubs, and homes

Enhance your sporting experience with quality nets.`,
    features: [
      "All sports coverage",
      "Professional-grade materials",
      "Weather-resistant",
      "Custom sizing",
      "Professional installation",
      "Durable construction",
      "Performance focused"
    ],
    applications: [
      "Cricket practice nets",
      "Football goal nets",
      "Volleyball courts",
      "Badminton courts",
      "Tennis courts",
      "Golf practice areas"
    ]
  },
  "pigeon-spikes": {
    title: "Pigeon Spikes",
    icon: Zap,
    image: "/lovable-uploads/ed9c3efa-c03d-414b-9297-6e60b56796f1.png",
    shortDescription: "We offer durable and effective pigeon spikes to keep unwanted birds away from your property.",
    fullDescription: `We offer durable and effective pigeon spikes to keep unwanted birds away from your property. Ideal for ledges, rooftops, AC units, pipes, and other bird-prone areas. Made from rust-proof stainless steel or polycarbonate for long-lasting use. Humane, safe, and maintenance-free bird control solution. Protect your space from droppings and damage — the smart, spike-safe way.

Our pigeon spikes provide humane bird deterrence:
• Made from rust-proof materials
• Humane and safe for birds
• Maintenance-free solution
• Easy to install
• Suitable for various surfaces
• Long-lasting protection

Keep your property clean and bird-free humanely.`,
    features: [
      "Rust-proof materials",
      "Humane bird deterrent",
      "Maintenance-free",
      "Easy installation",
      "Various surface compatible",
      "Long-lasting",
      "Effective protection"
    ],
    applications: [
      "Building ledges",
      "Rooftop areas",
      "AC units",
      "Pipes and railings",
      "Signage",
      "Solar panels"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hi! I'm interested in ${service.title}. Could you please provide more details and a quote?`;
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917606914368';
  };

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <IconComponent className="h-12 w-12" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-lg md:text-xl max-w-2xl">{service.shortDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <span>About This Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.applications.map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Our Work Gallery</CardTitle>
                <CardDescription>
                  See examples of our {service.title.toLowerCase()} installations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={service.image} 
                      alt={`${service.title} Example 1`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png" 
                      alt={`${service.title} Example 2`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png" 
                      alt={`${service.title} Example 3`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src="/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png" 
                      alt={`${service.title} Example 4`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Get Quote Now</CardTitle>
                <CardDescription>
                  Contact us for a free consultation and quote
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleBookNow}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleCall}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                    onClick={handleBookNow}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <div className="pt-4 border-t text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>76069 14368</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Karmanghat</p>
                  <p>• Hyderabad</p>
                  <p>• Secunderabad</p>
                  <p>• Dilsukhnagar</p>
                  <p>• LB Nagar</p>
                  <p>• Surrounding areas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
