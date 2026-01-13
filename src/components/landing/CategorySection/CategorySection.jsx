import React from 'react';
import Link from 'next/link';

const categories = [
  { 
    name: "খাঁটি মধু", 
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop", 
    count: "১২টি পণ্য", 
    href: "/category/honey",
  },
  { 
    name: "গাওয়া ঘি", 
    img: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=800&auto=format&fit=crop", 
    count: "৫টি পণ্য", 
    href: "/category/ghee",
  },
  { 
    name: "খাঁটি তেল", 
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop", 
    count: "৮টি পণ্য", 
    href: "/category/oil",
  },
];

const CategorySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Minimal Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-xs mb-3">Categories</span>
          <h2 className="text-4xl font-light text-gray-900 tracking-tight">
            সেরা <span className="font-serif italic text-emerald-800">সংগ্রহ</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.href} 
              className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100"
            >
              {/* Full Background Image */}
              <img 
                src={cat.img} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
              />
              
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>

              {/* Floating Content Area */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center">
                {/* Border Frame that appears on hover */}
                <div className="absolute inset-6 border border-white/30 rounded-[1.5rem] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                   <p className="text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                    {cat.count}
                  </p>
                  <h3 className="text-3xl font-bold text-white tracking-wide">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;