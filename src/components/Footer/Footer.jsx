import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-1.5 rounded-lg">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Organic<span className="text-green-500">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            আমরা বিশ্বাস করি সুস্থ জীবনের চাবিকাঠি হলো খাঁটি খাবার। সরাসরি খামার থেকে বিষমুক্ত অর্গানিক পণ্য আপনার দোরগোড়ায় পৌঁছে দেওয়াই আমাদের লক্ষ্য।
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/md.sakhawth.hosain" target="_blank" className="bg-gray-800 p-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/MdSakhawat21005" target="_blank" className="bg-gray-800 p-2.5 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" target="_blank" className="bg-gray-800 p-2.5 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-green-500 flex items-center gap-2 transition-colors"><span>›</span> Home</a></li>
            <li><a href="/products" className="hover:text-green-500 flex items-center gap-2 transition-colors"><span>›</span> Shop Products</a></li>
            <li><a href="/add-product" className="hover:text-green-500 flex items-center gap-2 transition-colors"><span>›</span> Sell Item</a></li>
            <li><a href="/login" className="hover:text-green-500 flex items-center gap-2 transition-colors"><span>›</span> Admin Portal</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3 group">
              <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Call Us</p>
                <p className="text-gray-200 font-medium">01851121472</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email Support</p>
                <p className="text-gray-200 font-medium break-all">hmdsakhawat236@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter/Map */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Location</h4>
          <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center gap-3">
            <MapPin className="text-green-500" size={24} />
            <span className="text-sm">Dhaka, Bangladesh. <br/> <span className="text-xs text-gray-500">Open: Sat - Thu (10am - 8pm)</span></span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Organic Shop</span>. Developed by <a href="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" target="_blank" className="text-green-500 hover:underline">Sakhawat Hossain</a>
        </p>
        <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;