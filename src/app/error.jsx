"use client";
import { useEffect } from 'react';
import { RefreshCcw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        
        {/* Error Icon */}
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm">
          <AlertTriangle size={48} />
        </div>
        
        {/* Error Messages */}
        <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
          দুঃখিত, সমস্যা হয়েছে!
        </h1>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          সার্ভার বা অ্যাপ্লিকেশনে সাময়িক টেকনিক্যাল সমস্যা হচ্ছে। নিচের বাটন চেপে আবার চেষ্টা করুন অথবা হোম পেজে ফিরে যান।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          
          {/* Try Again Button */}
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            <RefreshCcw size={18} /> Try Again
          </button>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
          >
            <Home size={18} /> Back to Home
          </Link>

        </div>

        {/* Simple Footer Note */}
        <p className="mt-12 text-xs font-bold text-slate-400 uppercase tracking-widest">
          Sakhawat's Organic Store
        </p>
      </div>
    </div>
  );
}