"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShoppingBasket,
  Menu,
  X,
  User,
  LayoutDashboard,
  LogOut,
  PlusCircle, 
} from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const auth = document.cookie.includes("isLoggedIn=true");
      setIsLoggedIn(auth);
    };

    checkAuth();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    setIsOpen(false);
    router.push("/login");
    router.refresh();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#064e3b]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-[#064e3b] py-4 border-b border-green-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-2 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
            <ShoppingBasket className="text-green-700" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white italic uppercase">
            ORGANIC<span className="text-green-400">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-2 py-1 border border-white/20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                pathname === link.href
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-100 hover:text-green-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Add Product Link (Only if Logged In) */}
          {isLoggedIn && (
            <Link
              href="/add-product"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all text-sm font-bold border border-white/20 ${
                pathname === "/add-product"
                  ? "bg-white text-green-900 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <PlusCircle size={16} /> 
              Add Product
            </Link>
          )}

          {/* Login or Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-all text-sm font-bold shadow-lg"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-400 transition-all text-sm font-bold shadow-lg shadow-green-900/20"
            >
              <User size={16} />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-[#064e3b] shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full border-l border-white/10">
          <button
            className="self-end p-2 mb-10 text-white hover:bg-white/10 rounded-full cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="space-y-8 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-bold transition-colors ${
                    pathname === link.href ? "text-green-400" : "text-white hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Add Product Link */}
            {isLoggedIn && (
              <Link
                href="/add-product"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 text-2xl font-bold ${
                    pathname === "/add-product" ? "text-white bg-green-500 p-2 rounded-lg" : "text-green-400"
                }`}
              >
                <PlusCircle size={24} />
                Add Product
              </Link>
            )}
          </div>

          {/* Mobile Login/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white text-center py-4 rounded-2xl font-extrabold mt-auto shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-red-600 transition-all"
            >
              <LogOut size={20} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-green-900 text-center py-4 rounded-2xl font-extrabold mt-auto shadow-xl hover:bg-gray-100 transition-all"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;