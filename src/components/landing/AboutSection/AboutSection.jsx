"use client"; // এই লাইনটি যোগ করা হয়েছে যা সমস্যার সমাধান করবে

import React from 'react';
import { CheckCircle2, Sprout, ShieldCheck, HeartPulse } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Gallery Style */}
          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop" 
                alt="Our Organic Farm" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Small Floating Card */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-emerald-600 text-white p-8 rounded-[2rem] shadow-2xl z-20 max-w-[250px] animate-bounce-slow">
              <p className="text-3xl font-black mb-1">০৫+</p>
              <p className="text-sm font-medium opacity-90 leading-snug">বছরেরও বেশি সময় ধরে আপনার আস্থা ও ভালোবাসায়।</p>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full -z-0 opacity-50 scale-90 group-hover:scale-100 transition-transform duration-1000"></div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">
                <Sprout size={20} />
                আমাদের গল্প
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                বিশুদ্ধতার সন্ধানে এক <span className="text-emerald-700 italic text-[0.9em]">সৎ পথচলা</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                বাজারের ভেজাল আর অস্বাস্থ্যকর পণ্যের ভিড়ে আমরা চেয়েছি সরাসরি কৃষকের ঘর থেকে খাঁটি ও নিরাপদ খাবার আপনার পরিবারের কাছে পৌঁছে দিতে। আমাদের মধু আসে সুন্দরবনের গহীন থেকে আর ঘি তৈরি হয় গ্রামের সতেজ দুধ থেকে।
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-emerald-600" />, title: "রাসায়নিক মুক্ত", desc: "কোনো প্রিজারভেটিভ নেই" },
                { icon: <HeartPulse className="text-emerald-600" />, title: "সরাসরি উৎস", desc: "সুন্দরবন ও গ্রাম থেকে" },
                { icon: <CheckCircle2 className="text-emerald-600" />, title: "ল্যাব টেস্টেড", desc: "শতভাগ মানের নিশ্চয়তা" },
                { icon: <Sprout className="text-emerald-600" />, title: "অর্গানিক চাষ", desc: "প্রাকৃতিক পদ্ধতিতে তৈরি" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-slate-200">
              আমাদের সম্পর্কে আরও জানুন
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;