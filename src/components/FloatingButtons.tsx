
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const handleCall = () => {
    window.location.href = 'tel:+917606914368';
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your safety net services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/917606914368?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <Button
        className="floating-button bottom-4 right-4 w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg shake-float"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button */}
      <Button
        className="floating-button bottom-20 right-4 w-14 h-14 bg-red-500 hover:bg-red-600 text-white shadow-lg shake-float"
        onClick={handleCall}
      >
        <Phone className="h-6 w-6" />
      </Button>
    </>
  );
};

export default FloatingButtons;
