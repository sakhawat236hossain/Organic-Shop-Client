"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBasket, Menu, X, User, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
      ? 'bg-[#064e3b]/90 backdrop-blur-md shadow-lg py-2' 
      : 'bg-[#064e3b] py-4 border-b border-green-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-2 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
            <ShoppingBasket className="text-green-700" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white italic">
            ORGANIC<span className="text-green-400">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-2 py-1 border border-white/20 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  isActive 
                  ? 'bg-green-500 text-white shadow-md' 
                  : 'text-gray-100 hover:text-green-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/dashboard" 
            className="flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full hover:bg-white hover:text-green-900 transition-all text-sm font-bold border border-white/20"
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          
          <Link 
            href="/login" 
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-400 transition-all text-sm font-bold shadow-lg shadow-green-900/20"
          >
            <User size={16} />
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-y-0 right-0 w-72 bg-[#064e3b] shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full border-l border-white/10">
          <button className="self-end p-2 mb-10 text-white hover:bg-white/10 rounded-full" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          
          <div className="space-y-8 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-bold text-white hover:text-green-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-2xl font-bold text-green-400"
            >
              <LayoutDashboard size={24} />
              Dashboard
            </Link>
          </div>

          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-white text-green-900 text-center py-4 rounded-2xl font-extrabold mt-auto shadow-xl"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;