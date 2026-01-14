"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Timer, Zap } from 'lucide-react';

const FlashSale = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                <Zap size={14} className="fill-emerald-400" /> Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                সাপ্তাহিক ধামাকা <br /> <span className="text-emerald-500">অফার চলছে!</span>
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4 text-white/70">
                <div className="flex items-center gap-2">
                  <Timer size={18} className="text-emerald-500" />
                  <span className="font-bold">অফার শেষ হতে আর ২ দিন বাকি</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl">
               <span className="text-6xl font-black text-emerald-500 mb-2">25%</span>
               <span className="text-white font-bold uppercase tracking-widest text-xs">Up to Discount</span>
               <Link href="/products" className="mt-8 px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2 group">
                 Check All Offers <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;