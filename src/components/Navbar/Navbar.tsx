"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBasket, Menu, X, User } from 'lucide-react';

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
    { name: 'Add Item', href: '/add-product' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <ShoppingBasket className="text-white" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            ORGANIC<span className="text-green-600">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center bg-gray-100/50 rounded-full px-2 py-1 border border-gray-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Login Button */}
        <div className="hidden md:block">
          <Link href="/login" className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors text-sm font-medium">
            <User size={16} />
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 flex flex-col h-full">
          <button className="self-end p-2 mb-8" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          
          <div className="space-y-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-bold text-gray-800 hover:text-green-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-green-600 text-white text-center py-4 rounded-2xl font-bold mt-auto"
          >
            Login to Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;