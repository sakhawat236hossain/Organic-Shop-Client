"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "আরিফ রহমান",
      role: "নিয়মিত ক্রেতা",
      comment: "সুন্দরবনের খলিশা মধুটা অসাধারণ! এর আগে অনেক জায়গা থেকে কিনেছি কিন্তু এরকম খাঁটি ঘ্রাণ আর স্বাদ কোথাও পাইনি। প্যাকিংও খুব উন্নত ছিল।",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "নুসরাত জাহান",
      role: "গৃহিণী",
      comment: "আপনাদের গাওয়া ঘি-এর সুঘ্রাণ পুরো বাড়িতে ছড়িয়ে পড়ে। একদম ছোটবেলায় নানু বাড়িতে যে ঘি খেতাম, ঠিক সেই স্বাদ পেলাম। অনেক ধন্যবাদ!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "তানভীর আহমেদ",
      role: "ফিটনেস ট্রেইনার",
      comment: "আমি ডায়েটের জন্য নারিকেল তেল ও মধু নিয়মিত ব্যবহার করি। আপনাদের পণ্যের বিশুদ্ধতা নিয়ে কোনো সন্দেহ নেই। আমি আমার স্টুডেন্টদেরও সাজেস্ট করেছি।",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "সুমাইয়া আক্তার",
      role: "শিক্ষিকা",
      comment: "কাঠ ঘানি ভাঙা সরিষার তেলের ঝাঁঝ এবং রঙ দেখে বোঝাই যায় এটি কতটা বিশুদ্ধ। এখন রান্নায় অন্য তেল ব্যবহার করাই ভুলে গেছি!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3">গ্রাহকদের সন্তুষ্টি আমাদের প্রেরণা</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group">
                
                {/* Quote Icon Background */}
                <Quote className="absolute right-8 top-8 text-emerald-50 w-20 h-20 -z-0 group-hover:text-emerald-100 transition-colors" />

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                    {rev.comment}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={rev.image} 
                      alt={rev.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 p-0.5"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{rev.name}</h4>
                      <p className="text-emerald-600 text-sm font-medium">{rev.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #10b981 !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { width: 30px !important; border-radius: 5px !important; opacity: 1; }
      `}</style>
    </section>
  );
};

export default Testimonials;