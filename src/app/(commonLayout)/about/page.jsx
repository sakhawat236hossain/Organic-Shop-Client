"use client";
import React from 'react';
import { Leaf, ShieldCheck, Truck, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Happy Customers", value: "5k+", icon: <Users size={20} /> },
    { label: "Organic Products", value: "150+", icon: <Leaf size={20} /> },
    { label: "Delivery Done", value: "10k+", icon: <Truck size={20} /> },
    { label: "Quality Awards", value: "12+", icon: <Award size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-24 pb-20">
      
      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-100">
           <Heart size={12} className="fill-emerald-600" /> Our Story
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
          আমরা পৌঁছে দিচ্ছি প্রকৃতির <br /> 
          <span className="text-emerald-600 italic">সবচেয়ে খাঁটি উপহার।</span>
        </h1>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          সখাওয়াত অর্গানিক স্টোরের যাত্রা শুরু হয়েছে কাস্টমারদের কাছে রাসায়নিক মুক্ত, খাঁটি এবং স্বাস্থ্যসম্মত খাবার পৌঁছে দেওয়ার অঙ্গীকার নিয়ে। আমরা বিশ্বাস করি, সুস্থ জীবনের মূল চাবিকাঠি হলো নিরাপদ খাদ্য।
        </p>
      </div>

      {/* --- Mission & Vision --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Organic Farming" 
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl hidden lg:block shadow-xl">
               <p className="text-3xl font-black">১০০%</p>
               <p className="text-xs font-bold uppercase tracking-wider opacity-80">খাঁটি ও নিরাপদ</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">আমাদের লক্ষ্য (Mission)</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি ঘরে ঘরে বিষমুক্ত এবং অর্গানিক পণ্য পৌঁছে দেওয়া। আমরা সরাসরি মাঠ পর্যায় থেকে পণ্য সংগ্রহ করি যাতে পুষ্টিগুণ এবং স্বাদ বজায় থাকে।
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-bold text-slate-800 text-sm">কঠোর মান নিয়ন্ত্রণ ব্যবস্থা</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf size={24} />
                </div>
                <p className="font-bold text-slate-800 text-sm">সরাসরি কৃষক থেকে সংগ্রহ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Stats Section --- */}
      <div className="bg-slate-900 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-emerald-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Owner Note / Call to Action --- */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">নিরাপদ খাদ্যে আপনার আস্থাই আমাদের মূলধন</h3>
            <p className="text-emerald-800/70 font-medium text-sm leading-relaxed mb-8">
              "আমি বিশ্বাস করি, আমরা যা খাই তার প্রভাব আমাদের জীবনে অপরিসীম। তাই আমার লক্ষ্য হলো প্রতিটি পরিবারকে খাঁটি মধু, তেল এবং অর্গানিক পণ্য সরবরাহ করা।"
            </p>
            <div className="flex flex-col items-center">
               <p className="font-black text-slate-900">মোঃ সখাওয়াত হোসেন</p>
               <p className="text-xs font-bold text-emerald-600 uppercase">Founding CEO, Organic Store</p>
            </div>
          </div>
          <Leaf className="absolute -top-10 -left-10 text-emerald-100" size={200} />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;