import React from 'react';
import { Star } from 'lucide-react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "প্রিমিয়াম সুন্দরবন মধু",
      weight: "৫০০ গ্রাম",
      price: "৬৫০",
      oldPrice: "৭৫০",
      img: "https://alharamainmart.com/wp-content/uploads/2024/12/sundarban-honey-1kg.png.png",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "গাওয়া ঘি (দেশি গাভীর)",
      weight: "৯০০ গ্রাম",
      price: "১২৫০",
      oldPrice: "১৩৫০",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB62gkjJ5nUkCdMwIXk3t-0iWZn4ixRT7v_w&s",
      tag: "100% Pure"
    },
    {
      id: 3,
      name: "খাঁটি নারিকেল তেল",
      weight: "১ কেজি",
      price: "৫৫০",
      oldPrice: "৬৫০",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DphDXoK7B3qGYN8csxQ5tRtnEO3Q3Qnitw&s",
      tag: "Limited"
    },
    {
      id: 4,
      name: "ঘানি ভাঙা সরিষার তেল",
      weight: "১ লিটার",
      price: "৩৬০",
      oldPrice: "৪০০",
      img: "https://www.dailyfoodshop.com/wp-content/uploads/2020/05/Ghani-Pure-Mustard-Oil-%E0%A6%98%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%99%E0%A6%BE-%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%BE%E0%A6%B0-%E0%A6%A4%E0%A7%87%E0%A6%B2-1-liter.png",
      tag: "Organic"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            আমাদের বিশেষ পণ্য
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 text-lg">সরাসরি কৃষক ও বাগান থেকে সংগৃহীত খাঁটি পণ্য</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-zinc-50 border border-zinc-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-100 transition-all duration-700">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                
                {/* Badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 border border-white/50 shadow-sm">
                  {product.tag}
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="flex justify-center gap-1 mb-3 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-400 font-semibold mb-4 tracking-wider uppercase">{product.weight}</p>

                <div className="flex items-center justify-center gap-3 bg-zinc-50 py-3 rounded-2xl group-hover:bg-emerald-50 transition-colors duration-500">
                  <span className="text-2xl font-black text-emerald-700 font-mono">৳{product.price}</span>
                  <span className="text-sm text-slate-300 line-through font-mono">৳{product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;