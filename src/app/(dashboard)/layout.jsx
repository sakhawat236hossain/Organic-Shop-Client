"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Home 
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Products', href: '/dashboard/products', icon: ShoppingBag },
    { name: 'Customers', href: '/dashboard/customers', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    toast.success('Logged out from Dashboard');
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* --- সাইডবার --- */}
      <aside className="w-72 bg-[#064e3b] text-white hidden md:flex flex-col sticky top-0 h-screen shadow-2xl">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black italic tracking-tighter">
            ORGANIC<span className="text-green-400">.</span>ADMIN
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                  isActive 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-900/20' 
                  : 'text-green-100/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-green-100/50 hover:text-white transition-colors">
            <Home size={18} />
            Back to Website
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full mt-2 flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-red-300 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* --- মেইন কন্টেন্ট এরিয়া --- */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
           <h2 className="text-xl font-bold text-slate-800 capitalize">
             {pathname.split('/').pop() || 'Dashboard'}
           </h2>
           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800">Admin User</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold border border-emerald-200">
                A
              </div>
           </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}