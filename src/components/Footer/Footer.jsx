import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-green-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="text-white" size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Organic<span className="text-green-500">.</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            আমরা বিশ্বাস করি সুস্থ জীবনের চাবিকাঠি হলো খাঁটি খাবার। সরাসরি খামার থেকে বিষমুক্ত অর্গানিক পণ্য আপনার দোরগোড়ায় পৌঁছে দেওয়াই আমাদের লক্ষ্য।
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://www.facebook.com/md.sakhawth.hosain", color: "hover:bg-blue-600" },
              { icon: Twitter, href: "https://x.com/MdSakhawat21005", color: "hover:bg-sky-500" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/", color: "hover:bg-blue-700" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-7 text-lg relative w-fit">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Shop Products", path: "/products" },
              { label: "Sell Item", path: "/add-product" },
              { label: "Admin Portal", path: "/login" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className="hover:text-green-500 flex items-center gap-2 transition-colors group">
                  <span className="text-green-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">›</span> 
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h4 className="text-white font-bold mb-7 text-lg relative w-fit">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
          </h4>
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4 group">
              <div className="bg-gray-800 p-2.5 rounded-xl group-hover:bg-green-500 transition-colors duration-300 text-gray-400 group-hover:text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                <p className="text-gray-200 font-medium tracking-wide">01851121472</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="bg-gray-800 p-2.5 rounded-xl group-hover:bg-green-500 transition-colors duration-300 text-gray-400 group-hover:text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email Support</p>
                <p className="text-gray-200 font-medium break-all">hmdsakhawat236@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Location */}
        <div>
          <h4 className="text-white font-bold mb-7 text-lg relative w-fit">
            Location
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
          </h4>
          <div className="bg-gray-800/30 p-5 rounded-2xl border border-gray-800 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                <MapPin size={20} />
              </div>
              <span className="text-sm text-gray-200 font-medium">Dhaka, Bangladesh.</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Open: Sat - Thu (10am - 8pm)
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[13px] text-gray-500">
          © {currentYear} <span className="text-gray-300 font-medium tracking-wide">ORGANIC SHOP</span>. Developed by <a href="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 font-semibold transition-colors underline underline-offset-4">Sakhawat Hossain</a>
        </p>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;