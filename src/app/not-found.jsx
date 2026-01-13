"use client";
import Link from 'next/link';
import { Home, AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <AlertCircle size={48} />
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
          </div>
        </div>

        <h1 className="text-7xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">পেজটি পাওয়া যায়নি!</h2>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          দুঃখিত, আপনি যে লিংকটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা ডিলিট করে দেওয়া হয়েছে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg active:scale-95"
          >
            <Home size={18} /> Home Page
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}