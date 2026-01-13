import React from 'react';
import { Leaf, Truck, ShieldCheck, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf />,
      title: "বিশুদ্ধ অর্গানিক",
      desc: "রাসায়নিক সার মুক্ত সরাসরি কৃষকের মাঠ থেকে আসা বিশুদ্ধ পণ্য।",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Truck />,
      title: "ফাস্ট ডেলিভারি",
      desc: "আপনার অর্ডারের পর দ্রুততম সময়ে আমরা পণ্য পৌঁছে দিই ঘরে ঘরে।",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <ShieldCheck />,
      title: "কোয়ালিটি গ্যারান্টি",
      desc: "প্রতিটি পণ্যের মান ও গুণাগুণ আমরা কঠোরভাবে যাচাই করি।",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      icon: <Heart />,
      title: "বিশ্বস্ত প্রতিষ্ঠান",
      desc: "হাজারো কাস্টমারের আস্থা ও ভালোবাসায় আমাদের পথচলা।",
      bgColor: "bg-lime-50",
      iconColor: "text-lime-600"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] transition-all duration-500"
            >
              {/* Animated Icon Container */}
              <div className={`relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl ${feature.bgColor} overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-20 group-hover:rotate-45 transition-transform duration-700 bg-current"></div>
                
                <div className={`${feature.iconColor} z-10`}>
                  {React.cloneElement(feature.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="mt-4 w-8 h-1 bg-gray-100 group-hover:w-full group-hover:bg-green-500 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;