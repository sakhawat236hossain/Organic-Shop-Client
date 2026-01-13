import Features from "@/components/landing/Features/Features";
import Hero from "@/components/landing/Hero/Hero";

export default function Home() {
  return (
    // flex-col ব্যবহার করলে সেকশনগুলো নিচে নিচে আসবে
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <Hero />
      <Features />
    </div>
  );
}