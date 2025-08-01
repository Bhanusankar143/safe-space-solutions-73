import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/386454ba-6678-4ed0-a68c-a68f9b9ff473.png",
    alt: "Balcony Safety Net Installation",
    title: "Balcony Safety Nets"
  },
  {
    id: 2,
    src: "/lovable-uploads/4e10a8f3-07c2-477f-834a-ac76376a19d5.png",
    alt: "Invisible Grills for Windows",
    title: "Invisible Grills"
  },
  {
    id: 3,
    src: "/lovable-uploads/4e66d21e-824d-4596-8c92-72e9cdda7b4a.png",
    alt: "Building Safety Net",
    title: "Building Safety Nets"
  },
  {
    id: 4,
    src: "/lovable-uploads/6d04dda3-1c0a-4277-9e31-26980088fe0c.png",
    alt: "Children Safety Net",
    title: "Children Safety Nets"
  },
  {
    id: 5,
    src: "/lovable-uploads/a103c497-2e04-40f7-83f7-e409ee3843bb.png",
    alt: "Anti Bird Net Installation",
    title: "Anti Bird Nets"
  },
  {
    id: 6,
    src: "/lovable-uploads/bea9aca1-1bfb-4dcf-9e7d-7d9e06aea6bd.png",
    alt: "Mosquito Net for Windows",
    title: "Mosquito Nets"
  }
];

const HeroGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
      setSelectedImage(galleryImages[prevIndex].id);
    } else {
      const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our professional safety net installations and quality work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm mt-1">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Professional {selectedImageData.title.toLowerCase()} installation by G. Kiran Safety Nets
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroGallery;