"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, ShoppingCart, ShieldCheck, Truck, Leaf, 
  Star, CheckCircle2, MessageSquare, Award, Zap, Heart, Share2 
} from 'lucide-react';
import toast from 'react-hot-toast';

const DetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setActiveImg(data.image);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductDetails();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 font-black text-slate-400 uppercase tracking-widest text-xs">Loading Details...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- Simple Modern Navbar --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-2 font-bold text-slate-600 hover:text-emerald-600 transition-all cursor-pointer">
            <div className="p-2 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            Back to Shop
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-200">
              <Leaf className="text-white" size={16} />
            </div>
            <span className="font-black text-slate-900 uppercase tracking-tighter hidden md:block">Pure Organic</span>
          </div>
          <div className="flex gap-4">
             <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Heart size={20}/></button>
             <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors"><Share2 size={20}/></button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- Left: Image Gallery (Stick to top) --- */}
          <div className="lg:col-span-7">
            <div className="sticky top-28 space-y-6">
              <div className="relative group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl">
                <img 
                  src={activeImg || product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                  In Stock
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveImg(product.image)}
                    className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${activeImg === product.image ? 'border-emerald-500 scale-95 shadow-lg' : 'border-white opacity-60 hover:opacity-100 hover:scale-105'}`}
                  >
                    <img src={product.image} alt="preview" className="w-full aspect-square object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right: Product Info --- */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl w-fit mb-6 border border-emerald-100">
              <Award size={14} className="fill-emerald-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Authentic Product</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-[1.1]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex bg-yellow-400/10 px-2 py-1 rounded-lg">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l pl-3 border-slate-200">128 Reviews</span>
            </div>

            <div className="mb-10">
               <span className="text-5xl font-black text-emerald-600 tracking-tighter">৳{product.price}</span>
               <span className="ml-4 text-lg font-bold text-slate-400 line-through">৳{parseInt(product.price) + 200}</span>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium italic border-l-4 border-emerald-100 pl-6">
              {product.description}
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 shadow-sm">
                 <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                 </div>
                 <p className="text-[11px] font-black text-slate-700 uppercase leading-tight">100% Pure <br/> Guaranteed</p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 shadow-sm">
                 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Truck size={20} />
                 </div>
                 <p className="text-[11px] font-black text-slate-700 uppercase leading-tight">Home <br/> Delivery</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => toast.success("Added to cart")} 
                className="flex-[2] py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-4 hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 active:scale-95 cursor-pointer"
              >
                <ShoppingCart size={24} /> Buy Now
              </button>
              <button className="flex-1 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-[1.5rem] font-black hover:bg-slate-50 transition-all active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* --- Highlighted Section --- */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
           {[
             { icon: Leaf, title: "Natural Process", desc: "Chemical-free sourcing", color: "bg-emerald-500" },
             { icon: Zap, title: "Fast Shipping", desc: "Delivery within 24 hours", color: "bg-orange-500" },
             { icon: ShieldCheck, title: "Easy Return", desc: "7 days money back policy", color: "bg-blue-500" }
           ].map((feat, idx) => (
             <div key={idx} className="group p-10 bg-white border border-slate-100 rounded-[3rem] text-center hover:shadow-2xl transition-all duration-500">
                <div className={`${feat.color} w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                   <feat.icon size={30} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 font-medium text-sm">{feat.desc}</p>
             </div>
           ))}
        </div>

        {/* --- Reviews Section (Clean Layout) --- */}
        <div className="bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-16 shadow-sm mb-20">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
              <div className="space-y-2">
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter">What Clients Say</h2>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Customer Satisfaction 100%</p>
              </div>
              <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black hover:bg-slate-900 transition-all shadow-lg shadow-emerald-100 active:scale-95">
                 Write a Review
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { name: "Rakibul Khan", initial: "RK", text: "মধুটা আসলেই অনেক খাঁটি। এর স্বাদ এবং সুঘ্রাণ অসাধারণ।", color: "bg-slate-100" },
                { name: "Sumaiya Akter", initial: "SA", text: "প্যাকেজিং খুবই প্রিমিয়াম। প্রোডাক্ট অনেক ফ্রেশ ছিল।", color: "bg-emerald-100" }
              ].map((rev, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-slate-50/50 border border-slate-100">
                   <div className="flex gap-4 mb-6">
                      <div className={`w-14 h-14 ${rev.color} rounded-2xl flex items-center justify-center font-black text-slate-700 text-xl`}>{rev.initial}</div>
                      <div>
                         <p className="font-black text-slate-900">{rev.name}</p>
                         <div className="flex text-yellow-500 mt-1">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                         </div>
                      </div>
                   </div>
                   <p className="text-slate-600 font-medium leading-relaxed italic">"{rev.text}"</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;