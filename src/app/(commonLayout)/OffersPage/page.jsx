"use client";
import React from "react";
import Link from "next/link";
import { Timer, ArrowRight, Sparkles, Percent, ShoppingBag, Zap, ChevronRight } from "lucide-react";

const OffersPage = () => {
  const flashSales = [
    {
      id: 1,
      title: "খাঁটি সুন্দরবনের মধু",
      discount: "১৫% অফ",
      oldPrice: "১২০০",
      newPrice: "১০২০",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=500",
      deadline: "২ দিন বাকি",
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "ঘানি ভাঙ্গা সরিষার তেল",
      discount: "১০% অফ",
      oldPrice: "৪৫০",
      newPrice: "৪০৫",
      image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=500",
      deadline: "৫ দিন বাকি",
      tag: "Flash Sale",
    },
    {
      id: 3,
      title: "অর্গানিক গাওয়া ঘি",
      discount: "১০% অফ",
      oldPrice: "১৮০০",
      newPrice: "১৬২০",
      image: "https://images.unsplash.com/photo-1631553127988-3475968f9a9a?q=80&w=500",
      deadline: "৩ দিন বাকি",
      tag: "Limited",
    },
    {
      id: 4,
      title: "মোরব্বা ও স্পেশাল আইটেম",
      discount: "২০% অফ",
      oldPrice: "১০০০",
      newPrice: "৮০০",
      image: "https://images.unsplash.com/photo-1594495044534-81a647846f46?q=80&w=500",
      deadline: "৩ দিন বাকি",
      tag: "New Arrival",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-5 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative rounded-[2.5rem] bg-[#1A1F2C] overflow-hidden mb-16 shadow-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between border border-white/5">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 space-y-6 max-w-lg text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Sparkles size={12} className="text-yellow-400" /> Seasonal Flash Sale
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
              Mega <span className="text-emerald-400">Discount</span> <br /> 
              চলছে এখন!
            </h1>
            
            <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed">
               আয়নার মতো খাঁটি জিনিসের জন্য আজই ভিজিট করুন। <br className="hidden md:block"/>
               আমাদের সকল পণ্যে পাচ্ছেন বিশাল ছাড়।
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link href="/products" className="bg-white text-slate-900 font-black px-8 py-3.5 rounded-xl hover:bg-emerald-400 hover:text-white transition-all shadow-lg flex items-center gap-2 text-sm uppercase">
                Link/products <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Side: */}
          <div className="relative mt-10 md:mt-0 flex items-center gap-6">
             {/* Center Card */}
             <div className="bg-[#242B3D] border border-white/10 p-8 rounded-[2rem] text-center shadow-2xl w-48 hidden sm:block">
                <p className="text-emerald-400 text-[10px] font-black uppercase mb-1">FOA26 SAD</p>
                <h2 className="text-2xl font-black text-white leading-tight mb-2">ডিসকাউন্ট <br/> টাউন!</h2>
             </div>
             
             {/* Percentage Circle */}
             <div className="w-36 h-36 md:w-44 md:h-44 bg-[#242B3D] border-4 border-slate-700 rounded-full flex flex-col items-center justify-center relative shadow-inner">
                <div className="absolute inset-2 border border-emerald-500/20 rounded-full animate-spin-slow"></div>
                <p className="text-3xl md:text-4xl font-black text-white">25%</p>
                <p className="text-[10px] font-black text-white/40 uppercase">Up To Off</p>
                {/* Red Label */}
                <div className="absolute -bottom-2 -right-4 bg-red-500 text-white text-[8px] font-black px-3 py-1.5 rounded-lg rotate-12 shadow-lg">
                  সীমিত সময়
                </div>
             </div>
          </div>
        </div>

        {/* --- Flash Sales Title --- */}
        <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
              <Timer size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight leading-none mb-1">Flash Sales</h2>
              <div className="flex items-center gap-2">
                 <span className="text-sm font-bold text-slate-400">খুজে নিন আপনার পছন্দ</span>
                 <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[9px] font-black rounded-md uppercase">চলমান ডিল</span>
              </div>
            </div>
        </div>

        {/* --- Product Grid--- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSales.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-slate-100"
            >
              {/* Product Image Portion */}
              <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-5 bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-red-500/90 text-white px-3 py-1 rounded-lg text-[9px] font-black shadow-lg">
                   {product.discount}
                </div>
              </div>

              {/* Product Details Portion */}
              <div className="px-1 space-y-3">
                <div className="flex items-center gap-2 text-red-500">
                  <Timer size={12} className="animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-wider">{product.deadline}</span>
                </div>
                
                <h3 className="text-sm font-black text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug h-10 line-clamp-2">
                  {product.title}
                </h3>

                <div className="pt-2 flex items-center justify-between border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 line-through">৳{product.oldPrice}</span>
                    <span className="text-lg font-black text-emerald-600">৳{product.newPrice}</span>
                  </div>
                  
                  <Link href={`/product/${product.id}`}>
                    <button className="bg-slate-900 group-hover:bg-emerald-600 text-white p-3 rounded-xl transition-all active:scale-90 shadow-md">
                      <ShoppingBag size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OffersPage;