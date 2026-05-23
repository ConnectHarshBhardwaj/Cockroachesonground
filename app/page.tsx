import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HomeAbout } from '@/components/HomeAbout';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeAbout />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
