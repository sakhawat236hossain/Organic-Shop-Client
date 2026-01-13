"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Hero = () => {
  const slides = [
    {
      title: "প্রকৃতির খাঁটি উপহার",
      subtitle: "১০০% অর্গানিক মধু",
      desc: "সুন্দরবনের গহীন জঙ্গল থেকে সরাসরি সংগৃহীত প্রাকৃতিক মধু, যা আপনার রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে।",
      img: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#fffbeb]",
      accent: "text-amber-600",
      btnClass: "bg-amber-600 hover:bg-amber-700 shadow-amber-200"
    },
    {
      title: "সুস্থ শরীরের চাবিকাঠি",
      subtitle: "খাঁটি গাওয়া ঘি",
      desc: "ঘরোয়া পদ্ধতিতে তৈরি প্রিমিয়াম কোয়ালিটির ঘি, যার সুঘ্রাণ আপনার খাবারের তৃপ্তি বাড়িয়ে দেবে বহুগুণ।",
      img: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#fff7ed]", 
      accent: "text-orange-600",
      btnClass: "bg-orange-600 hover:bg-orange-700 shadow-orange-200"
    },
    {
      title: "তাজা এবং বিষমুক্ত",
      subtitle: "অর্গানিক শাক-সবজি",
      desc: "কোনো প্রকার রাসায়নিক সার ছাড়াই উৎপাদিত সতেজ সবজি সরাসরি আপনার রান্নাঘরে পৌঁছে দিচ্ছি আমরা।",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#f0fdf4]", 
      accent: "text-green-600",
      btnClass: "bg-green-600 hover:bg-green-700 shadow-green-200"
    }
  ];

  return (
    <section className="relative w-full h-[650px] md:h-[700px] lg:h-screen flex items-center overflow-hidden">
      <Swiper
        effect={'fade'}
        speed={1200}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-full ${slide.color} relative flex items-center pt-10 lg:pt-0`}>
              
              {/* Background Animated Shapes (Hidden on very small screens for performance) */}
              <div className="absolute top-[-5%] left-[-5%] w-48 h-48 md:w-72 md:h-72 bg-white/50 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-[-5%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-white/40 rounded-full blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Image Content - First on Mobile */}
                <div className="relative order-1 lg:order-2 flex justify-center items-center">
                  <div className={`absolute w-[110%] h-[110%] rounded-full opacity-10 animate-spin-slow ${slide.accent.replace('text', 'bg')}`}></div>
                  
                  <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-full lg:max-w-[450px] aspect-square overflow-hidden rounded-[2rem] lg:rounded-[4rem] shadow-xl border-[6px] lg:border-[16px] border-white transform rotate-0 lg:-rotate-2 animate-imageIn">
                     <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="w-full h-full object-cover scale-110" 
                    />
                  </div>
                </div>

                {/* Text Content - Second on Mobile */}
                <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                  <div className="space-y-3 md:space-y-4">
                    <span className={`inline-block font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs lg:text-sm px-4 py-1.5 rounded-full border border-current bg-white/50 backdrop-blur-sm shadow-sm ${slide.accent} animate-slideDown`}>
                      {slide.subtitle}
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.2] lg:leading-[1] tracking-tight animate-slideRight">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fadeIn delay-500">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="flex flex-row justify-center lg:justify-start gap-3 md:gap-5 pt-2 animate-slideUp">
                    <Link href="/products" className={`${slide.btnClass} text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all transform hover:scale-105 shadow-lg`}>
                      অর্ডার করুন
                    </Link>
                    <Link href="/about" className="bg-white/80 text-slate-900 border border-slate-200 px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-white transition-all shadow-md">
                      বিস্তারিত
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes imageIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-slideRight { animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out 0.5s forwards; opacity: 0; }
        .animate-imageIn { animation: imageIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }

        .swiper-pagination-bullet { width: 8px; height: 8px; background: #94a3b8; transition: all 0.3s; }
        .swiper-pagination-bullet-active { width: 24px; border-radius: 10px; background: #0f172a !important; }
        
        @media (min-width: 768px) {
          .swiper-pagination-bullet { width: 10px; height: 10px; }
          .swiper-pagination-bullet-active { width: 40px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;