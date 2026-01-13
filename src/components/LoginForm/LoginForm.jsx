"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Mail, Lock, Eye, EyeOff, Loader2, Leaf, Zap, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const executeLogin = () => {
    document.cookie = "auth=true; path=/";
    Cookies.set('isLoggedIn', 'true', { expires: 1 });
    toast.success('Login Successful! Redirecting...', {
      duration: 2000,
      style: {
        borderRadius: '15px',
        background: '#10b981',
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    
    setTimeout(() => {
      router.push("/products");
    }, 1500);
  };

  const handleQuickLogin = () => {
    setLoading(true);
    toast.loading('Quick Accessing...', { id: 'quick-login' });
    setTimeout(() => {
      toast.dismiss('quick-login');
      executeLogin();
    }, 1000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@organic.com" && password === "admin123") {
        executeLogin();
      } else {
        toast.error('Invalid Email or Password!', {
          style: {
            borderRadius: '15px',
            background: '#ef4444',
            color: '#fff',
            fontWeight: 'bold',
          },
        });
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-[420px] w-full relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-400 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        
        <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-white">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-emerald-600 to-green-400 rounded-2xl shadow-lg shadow-emerald-200 mb-4 transform hover:scale-110 transition-transform cursor-pointer">
              <Leaf className="text-white" size={30} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Admin Portal</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Manage your organic shop</p>
          </div>

          {/* Quick Login - Vibrant Orange */}
          <button 
            type="button"
            onClick={handleQuickLogin}
            disabled={loading}
            className="w-full cursor-pointer mb-8 flex items-center justify-center gap-3 bg-gradient-to-r from-orange-400 to-rose-500 text-white py-4 rounded-2xl font-bold shadow-[0_10px_25px_-5px_rgba(244,63,94,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(244,63,94,0.5)] active:scale-95 transition-all text-sm disabled:opacity-50"
          >
            <Zap size={18} className="fill-current" />
            Instant Admin Access
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <span className="relative bg-white px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Login Manually</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-12 pr-4 py-4 bg-slate-100/50 border border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white transition-all text-sm font-bold text-slate-700 placeholder:text-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-12 pr-12 py-4 bg-slate-100/50 border border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white transition-all text-sm font-bold text-slate-700 placeholder:text-slate-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Main Green Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 rounded-2xl font-black text-lg shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  Sign In Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-xs text-slate-400 font-bold tracking-wide">
            FORGOT PASSWORD? <span className="text-emerald-600 cursor-pointer hover:underline underline-offset-4">GET HELP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;