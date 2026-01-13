"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, ShoppingCart, ShieldCheck, Truck, Leaf, 
  Star, CheckCircle2, MessageSquare, Award, Zap 
} from 'lucide-react';
import toast from 'react-hot-toast';

const DetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductDetails();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20">
      {/* Navigation Bar Simple */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center gap-2 font-bold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer">
            <ArrowLeft size={20} /> Back
          </button>
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-600" size={20} />
            <span className="font-black text-slate-900 uppercase tracking-tighter">Organic Store</span>
          </div>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Image Gallery Perspective */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
            {/* Repetitive Gallery Preview */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-2 border-slate-100 rounded-xl overflow-hidden opacity-70 hover:opacity-100 hover:border-emerald-500 transition-all cursor-pointer">
                  <img src={product.image} alt="preview" className="w-full h-full object-cover aspect-square" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pricing and Core Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full w-fit mb-6">
              <Award size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Premium Choice</span>
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-slate-400">(128 Verified Reviews)</span>
            </div>

            <div className="text-4xl font-black text-emerald-600 mb-8 tracking-tighter">৳{product.price}</div>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="text-emerald-500" size={18} /> 100% Pesticide Free & Fresh
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <Zap className="text-emerald-500" size={18} /> Instant Delivery in 24 Hours
              </div>
            </div>

            <button onClick={() => toast.success("Added to cart")} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:bg-emerald-600 transition-all shadow-xl active:scale-95 cursor-pointer">
              <ShoppingCart size={24} /> Buy Now
            </button>
          </div>
        </div>

        {/* Feature Highlights Section (Added Length) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-emerald-900 text-white rounded-3xl text-center">
            <Leaf className="mx-auto mb-4 text-emerald-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Organic Sourced</h3>
            <p className="text-emerald-100/70 text-sm font-medium">সরাসরি কৃষকের মাঠ থেকে আপনার দরজায়।</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm">
            <Truck className="mx-auto mb-4 text-emerald-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-slate-500 text-sm font-medium">সারা বাংলাদেশে দ্রুত হোম ডেলিভারি সুবিধা।</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center shadow-sm">
            <ShieldCheck className="mx-auto mb-4 text-emerald-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Safe Payment</h3>
            <p className="text-slate-500 text-sm font-medium">নিরাপদ পেমেন্ট এবং সহজ রিটার্ন পলিসি।</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <MessageSquare size={28} className="text-emerald-600" /> Customer Reviews
              </h2>
              <p className="text-slate-500 font-medium mt-1">See what our health-conscious customers say.</p>
            </div>
            <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-bold hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
              Write a Review
            </button>
          </div>

          <div className="space-y-10">
            {/* Review 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xl shrink-0">RK</div>
              <div>
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">অসাধারণ কোয়ালিটি!</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-3">মধুটা আসলেই অনেক খাঁটি। এর স্বাদ এবং সুঘ্রাণ বলে দেয় এটা একদম ন্যাচারাল। ডেলিভারিও অনেক ফাস্ট ছিল।</p>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">— Rakibul Khan, Dhaka</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col md:flex-row gap-6 border-t border-slate-50 pt-10">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl shrink-0">SA</div>
              <div>
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">হেলদি লাইফস্টাইলের জন্য সেরা</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-3">প্যাকেজিং খুবই প্রিমিয়াম। প্রোডাক্ট অনেক ফ্রেশ ছিল। পরবর্তী কেনাকাটার জন্য অবশ্যই এখানে আসব।</p>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">— Sumaiya Akter, Sylhet</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;