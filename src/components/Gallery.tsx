import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/cd42986b-78e7-4377-aeae-51b108e1381d.png",
    title: "Balcony Safety Net Installation",
    description: "Professional balcony safety net installation in a high-rise apartment"
  },
  {
    id: 2,
    src: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png",
    title: "Invisible Grills",
    description: "Premium invisible grills providing safety without blocking views"
  },
  {
    id: 3,
    src: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png",
    title: "Mosquito Net Protection",
    description: "High-quality mosquito nets for doors and windows"
  },
  {
    id: 4,
    src: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png",
    title: "Cloth Hanger System",
    description: "Space-saving pulley-based cloth drying hanger"
  },
  {
    id: 5,
    src: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png",
    title: "Anti Bird Net",
    description: "Effective bird protection for balconies and buildings"
  },
  {
    id: 6,
    src: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png",
    title: "Children Safety Net",
    description: "Child-safe protection nets for balconies and windows"
  },
  {
    id: 7,
    src: "/lovable-uploads/c39dc420-c442-4d33-aeef-5d9413f9e5cb.png",
    title: "Pet Safety Net",
    description: "Pet-friendly safety nets for secure outdoor spaces"
  },
  {
    id: 8,
    src: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png",
    title: "Building Safety Net",
    description: "Construction site safety nets meeting industry standards"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imageId: number) => {
    const index = galleryImages.findIndex(img => img.id === imageId);
    setCurrentImageIndex(index);
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(galleryImages[currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1].id);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
    setSelectedImage(galleryImages[currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1].id);
  };

  const currentImage = galleryImages[currentImageIndex];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Work Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our professional installations across Karmanghat, Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image.id)}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background border-0">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          {currentImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <img 
                src={currentImage.src} 
                alt={currentImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-2">{currentImage.title}</h3>
                <p className="text-white/90">{currentImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;