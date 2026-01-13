// src/app/(common)/layout.js (অথবা আপনার ফাইল পাথ অনুযায়ী)
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div >
      {/* Navbar fixed থাকায় এর উচ্চতা অনুযায়ী পেজের উপরে একটু প্যাডিং দিতে হয় */}
      <Navbar />
      
      {/* main ট্যাগ ব্যবহার করা SEO এবং স্ট্রাকচারের জন্য ভালো */}
      <main className="max-w-[1300px] mx-auto ">
        {children}
      </main>

      <Footer />
    </div>
  );
}