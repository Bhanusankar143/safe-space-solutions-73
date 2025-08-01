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
    <section className="py-24 hero-modern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8">
            Our Exquisite <span className="text-accent-light">Portfolio</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-body">
            Discover our masterful safety net installations that blend uncompromising security 
            with aesthetic excellence across Hyderabad's most prestigious properties
          </p>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-accent transition-all duration-700 cursor-pointer card-hover floating-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModal(image.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-2xl font-bold mb-3">{image.title}</h3>
                  <p className="text-sm text-white/90 mb-4 font-body">Masterful installation by G. Kiran Safety Nets</p>
                  <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
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