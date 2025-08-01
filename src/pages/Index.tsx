
import { useState } from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import HeroGallery from '@/components/HeroGallery';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LoadingScreen from '@/components/LoadingScreen';
import Locations from '@/components/Locations';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background font-sans">{/* Enhanced theme */}
      <Header />
      <HeroCarousel />
      <HeroGallery />
      <Statistics />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Locations />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
