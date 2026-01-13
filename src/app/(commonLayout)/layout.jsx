import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1300px] mx-auto pt-16 lg:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}