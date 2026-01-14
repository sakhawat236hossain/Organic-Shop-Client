import Hero from "@/components/landing/Hero/Hero";
import Features from "@/components/landing/Features/Features";
import CategorySection from "@/components/landing/CategorySection/CategorySection";
import BestSellers from "@/components/landing/BestSellers/BestSellers";
import AboutSection from "@/components/landing/AboutSection/AboutSection";
import Testimonials from "@/components/landing/Testimonials/Testimonials";
import FlashSale from "@/components/landing/FlashSale/FlashSale";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Hero />

      <Features />

      <CategorySection />
      <FlashSale />

      <BestSellers />

      <AboutSection />

      <Testimonials />
    </div>
  );
}