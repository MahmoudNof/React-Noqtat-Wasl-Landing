import React from "react";
import { translations } from "../data"; // استيراد الترجمات

const Impact = ({lang}) => {
  const t = translations[lang].impact;
  // طبقة حماية للتأكد من أن البيانات وصلت
  if (!t.stats) return null;

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-500 mb-2">
            {t.title}
          </h2>
          <p className="text-gray-400 text-sm italic">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {t.stats.map((stat) => (
            <div
              key={stat.id}
              className="p-10 rounded-3xl bg-white border-2 border-gray-50 hover:border-[#D4AF37] shadow-xl transition-all duration-300 ease-in-out
              group"
            >
              {/* هنا يتم عرض الأيقونة التي تم تمريرها من data.js */}
            <div className="mb-6 flex justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
              {/* الرقم باللون الذهبي */}
              <h3 className="text-5xl font-black text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-gray-800 font-bold text-xl mb-2">
                {stat.label}
              </p>
              {/* تم تصحيح الخطأ المطبعي هنا */}
              <p className="text-gray-400 text-sm font-medium tracking-wide">
                {stat.goalLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
