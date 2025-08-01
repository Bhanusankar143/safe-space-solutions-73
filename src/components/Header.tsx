
import { useState } from 'react';
import { Menu, X, Shield, Phone, Mail, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

const services = [
  { name: "Invisible Grills", slug: "invisible-grills" },
  { name: "Balcony Safety Net", slug: "balcony-safety-net" },
  { name: "Mosquito Nets", slug: "mosquito-nets" },
  { name: "Hanger Cloth", slug: "hanger-cloth" },
  { name: "Anti Bird Nets", slug: "anti-bird-nets" },
  { name: "Children Safety Nets", slug: "children-safety-nets" },
  { name: "Pet Safety Nets", slug: "pet-safety-nets" },
  { name: "Building Safety Nets", slug: "building-safety-nets" },
  { name: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
  { name: "All Sports Nets", slug: "all-sports-nets" },
  { name: "Pigeon Spikes", slug: "pigeon-spikes" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:+917606914368';
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your safety net services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceClick = (slug: string) => {
    navigate(`/service/${slug}`);
  };

  return (
    <header className="sticky top-0 z-50 nav-modern">{/* Enhanced modern nav */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Phone and WhatsApp */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/lovable-uploads/e4b4ae4c-bcb6-4bd6-9902-812ef421b989.png" 
                alt="G. Kiran Safety Nets Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Phone and WhatsApp buttons next to logo */}
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleCall}
                className="flex items-center space-x-1 shake-continuous border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call</span>
              </Button>
              <Button 
                size="sm" 
                onClick={handleWhatsApp}
                className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 shake-continuous"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            
            {/* Gallery Button */}
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.slug}
                    onClick={() => handleServiceClick(service.slug)}
                    className="cursor-pointer"
                  >
                    {service.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-primary" />
              <span>76069 14368</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-primary" />
              <span>gkiransafetynets@gmail.com</span>
            </div>
          </div>
            
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t animate-fade-in-up">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                About
              </button>
              
              {/* Gallery Button for Mobile */}
              <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
                Gallery
              </button>
              
              {/* Mobile Services Menu */}
              <div className="space-y-2">
                <span className="font-medium text-foreground">Services</span>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <button 
                      key={service.slug}
                      onClick={() => handleServiceClick(service.slug)}
                      className="block text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              
              <div className="pt-4 border-t space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>76069 14368</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>gkiransafetynets@gmail.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
