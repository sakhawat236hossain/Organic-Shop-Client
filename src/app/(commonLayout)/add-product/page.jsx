"use client";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PackagePlus, Image as ImageIcon, Tag, AlignLeft, Banknote, Sparkles, Leaf, ShoppingBag } from 'lucide-react';

export default function AddProductPage() {
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });
  const [loading, setLoading] = useState(false);

  const styles = {
    // Background with vibrant gradients
    wrapper: "min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#ffffff] to-[#f0fdfa] flex items-center justify-center pt-28 pb-16 px-4 relative overflow-hidden",
    bgCircle1: "absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-[100px] animate-pulse",
    bgCircle2: "absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100/40 rounded-full blur-[100px]",
    
    // Main Container
    container: "relative w-full max-w-5xl bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(6,78,59,0.12)] border border-white overflow-hidden flex flex-col lg:flex-row",
    
    // Left Sidebar: Deep Green
    sidebar: "lg:w-[38%] bg-gradient-to-b from-[#064e3b] to-[#022c22] p-12 text-white flex flex-col justify-between relative overflow-hidden",
    badge: "inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-green-300 mb-8 border border-white/10 backdrop-blur-md",
    title: "text-5xl font-black leading-[1.1] mb-6 tracking-tight",
    subtitle: "text-green-100/70 text-base leading-relaxed font-medium mb-8",
    
    // Input Styling 
    label: "flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#064e3b] ml-2 group-focus-within:text-emerald-500 transition-all",
    input: "w-full px-6 py-4 bg-[#f1f5f9] border-2 border-[#cbd5e1] rounded-[1.5rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-800 font-bold placeholder:text-gray-400",
    textarea: "w-full px-6 py-4 bg-[#f1f5f9] border-2 border-[#cbd5e1] rounded-[1.5rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] focus:bg-white focus:border-emerald-500 outline-none transition-all text-gray-800 font-bold h-36 resize-none placeholder:text-gray-400",
    
    // Button
    submitBtn: (isLoading) => `w-full py-5 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-[0.97] shadow-xl ${
      isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#10b981] to-[#064e3b] text-white hover:shadow-emerald-900/30 hover:-translate-y-0.5 cursor-pointer"
    }`
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Product Added Successfully!", {
          style: { background: '#064e3b', color: '#fff', borderRadius: '15px' }
        });
        setFormData({ name: '', price: '', description: '', image: '' });
      }
    } catch (error) {
      toast.error("Connection failed! Check server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>

      <div className={styles.container}>
        {/* Left Side Info */}
        <div className={styles.sidebar}>
          <div className="relative z-10">
            <div className={styles.badge}><Leaf size={14} className="text-yellow-400" /> Admin Portal</div>
            <h2 className={styles.title}>Grow Your <br/> <span className="text-green-400 font-outline-2">Inventory.</span></h2>
            <p className={styles.subtitle}>অর্গানিক শপের নতুন পণ্যগুলো সুন্দরভাবে ডাটাবেসে সেভ করুন।</p>
          </div>

          <div className="flex items-center gap-4 p-5 bg-white/10 rounded-[2rem] border border-white/10 backdrop-blur-sm relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={28} />
            </div>
            <div>
              <p className="text-[10px] text-green-300 font-black uppercase tracking-widest">Database</p>
              <p className="text-lg font-black tracking-tight leading-none text-white">Live & Secure</p>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 opacity-10 rotate-12 text-white">
            <ShoppingBag size={250} />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-[62%] p-8 lg:p-16 bg-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="md:col-span-2 group space-y-3">
              <label className={styles.label}><Tag size={16} className="text-orange-500" /> Product Name</label>
              <input type="text" required className={styles.input} placeholder="e.g. Pure Sundarban Honey"
                onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
            </div>

            <div className="group space-y-3">
              <label className={styles.label}><Banknote size={16} className="text-emerald-500" /> Price (৳)</label>
              <input type="number" required className={styles.input} placeholder="Price in BDT"
                onChange={(e) => setFormData({...formData, price: e.target.value})} value={formData.price} />
            </div>

            <div className="group space-y-3">
              <label className={styles.label}><ImageIcon size={16} className="text-blue-500" /> Image URL</label>
              <input type="text" required className={styles.input} placeholder="Paste image link here"
                onChange={(e) => setFormData({...formData, image: e.target.value})} value={formData.image} />
            </div>

            <div className="md:col-span-2 group space-y-3">
              <label className={styles.label}><AlignLeft size={16} className="text-purple-500" /> Description</label>
              <textarea required className={styles.textarea} placeholder="Write something about product freshness..."
                onChange={(e) => setFormData({...formData, description: e.target.value})} value={formData.description}></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button type="submit" disabled={loading} className={styles.submitBtn(loading)}>
                {loading ? (
                   <div className="w-7 h-7 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <PackagePlus size={26} /> 
                    <span>Save Product</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}