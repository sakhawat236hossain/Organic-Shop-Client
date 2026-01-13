import BestSellers from "@/components/landing/BestSellers/BestSellers";
import CategorySection from "@/components/landing/CategorySection/CategorySection";
import Features from "@/components/landing/Features/Features";
import Hero from "@/components/landing/Hero/Hero";
import Testimonials from "@/components/landing/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <Hero />
      <Features />
      <CategorySection></CategorySection>
      <BestSellers></BestSellers>
      <Testimonials></Testimonials>
    </div>
  );
}