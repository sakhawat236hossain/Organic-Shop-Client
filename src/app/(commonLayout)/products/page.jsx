"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Eye, Leaf, ShoppingCart, Package } from 'lucide-react';

const ProductAllPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        
        {/* --- Header Section (Space Optimized) --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <Package size={18} className="text-emerald-600" />
               <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Product <span className="text-emerald-600">Inventory</span>
               </h1>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Manage and explore your organic collection.
            </p>
          </div>

          <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-slate-700">{products.length} Items Live</span>
          </div>
        </div>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group">
              
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 border-b border-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-900 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                  ৳{product.price}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-emerald-600 mb-2">
                  <Leaf size={12} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Premium Organic</span>
                </div>
                
                <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-1 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4 h-8 font-medium">
                  {product.description}
                </p>

                {/* View Details Button */}
                <Link href={`/products/${product._id}`}>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer shadow-sm active:scale-95">
                    <Eye size={14} />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
            <ShoppingCart size={32} className="mx-auto text-slate-300 mb-3" />
            <h3 className="text-lg font-bold text-slate-700 tracking-tight">Inventory is Empty</h3>
            <p className="text-xs text-slate-500 mt-1">Ready to add your first organic product?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAllPage;