"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, Github, Linkedin, Facebook } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("ধন্যবাদ সখাওয়াত ভাই, আপনার মেসেজটি পাঠানো হয়েছে!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            Contact <span className="text-emerald-600">Information</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            আপনার প্রোজেক্ট বা অর্গানিক শপ নিয়ে যেকোনো আলোচনার জন্য সরাসরি আমার সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Personal Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                My Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</p>
                    <p className="text-base font-bold text-slate-800">01851121472</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="text-base font-bold text-slate-800 truncate">hmdsakhawat236@gmail.com</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Social Presence</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" target="_blank" className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all shadow-md">
                      <Linkedin size={18} />
                    </a>
                    <a href="https://github.com/sakhawat236hossain" target="_blank" className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all shadow-md">
                      <Github size={18} />
                    </a>
                    <a href="https://www.facebook.com/md.sakhawth.hosain" target="_blank" className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all shadow-md">
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-emerald-900 p-8 rounded-2xl text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-1">সরাসরি কথা বলতে চান?</h4>
                  <p className="text-emerald-100/70 text-sm font-medium">কল করুন অথবা ইমেইল পাঠান।</p>
               </div>
               <Globe size={100} className="absolute -right-4 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                />
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                />
              </div>

              <input 
                type="text" 
                required 
                placeholder="Subject"
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
              />

              <textarea 
                rows="5" 
                required 
                placeholder="How can I help you today?"
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium resize-none"
              ></textarea>

              <button 
                type="submit" 
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;