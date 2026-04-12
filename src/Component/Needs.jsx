import React from 'react';
import { FaArchway, FaColumns, FaWater, FaCube, FaHeart } from 'react-icons/fa';
import { translations, CONSTRUCTION_CONFIG } from '../data';

const Needs = ({ lang, onOpenModal }) => {
  // جلب الترجمة والبيانات الثابتة
  const t = translations[lang].needs;
  const {unitsCount } = CONSTRUCTION_CONFIG;

  // حساب التكاليف ديناميكياً بناءً على المصفوفة الموجودة في data.jsx
  const unitTotalILS = t.unitTotal;
  const totalProjectILS = unitTotalILS * unitsCount;
  const totalProjectUSD = t.usdTotal;

  // خريطة الأيقونات لربط النصوص بالـ Components
  const iconMap = { 
    FaArchway: <FaArchway />, 
    FaColumns: <FaColumns />, 
    FaWater: <FaWater /> 
  };

  return (
    <section id="needs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* الجانب الأول: عرض المربعات ديناميكياً */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f7a5a]/10 text-[#1f7a5a] rounded-full text-sm font-bold mb-6 w-fit">
              <FaCube />
              {t.badge}
            </div>
            
            <h2 className="text-3xl font-black mb-4 text-gray-800">{t.title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.description}</p>
            
            <div className="grid gap-4 flex-grow">
              {t.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-all group">
                  <div className="flex items-center gap-4">
                    <span className="text-[#1f7a5a] text-2xl group-hover:scale-110 transition-transform">
                      {iconMap[item.icon]}
                    </span>
                    <span className="font-bold text-gray-700">{item.label}</span>
                  </div>
                  <div className="text-left font-mono font-black text-[#1f7a5a]">
                    {item.price}{t.currency}
                  </div>
                </div>
              ))}
            </div>

            {/* زر التبرع الديناميكي */}
            <button 
              onClick={onOpenModal}
              className="mt-8 w-full py-5 bg-[#D4AF37] hover:bg-[#b8962d] text-[#1f7a5a] rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#D4AF37]/20 active:scale-95"
            >
              <FaHeart className="animate-pulse" />
              {t.sponsorBtn} ({unitTotalILS}{t.currency})
            </button>
          </div>

          {/* الجانب الثاني: ملخص الميزانية الإجمالية */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#1f7a5a] p-10 rounded-[3rem] text-white h-full shadow-2xl relative overflow-hidden flex flex-col justify-center">
              {/* لمسة جمالية خلفية */}
              <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                 <FaArchway size={300} />
              </div>

              <div className="relative z-10">
                <p className="text-white/60 mb-2 uppercase tracking-widest text-sm font-bold">
                  {t.fullProjectLabel}
                </p>
                <h3 className="text-7xl font-black mb-12 flex items-baseline gap-2">
                  {totalProjectILS.toLocaleString()}
                  <span className="text-3xl text-[#D4AF37]">{t.currency}</span>
                </h3>
                
                <div className="space-y-6 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">{t.totalUnitsLabel}</span>
                    <span className="font-black text-3xl">{unitsCount} {t.unitSuffix}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/10 pt-6">
                    <span className="text-white/80">{t.estimatedUSD}</span>
                    <span className="font-black text-4xl text-[#D4AF37] tracking-tighter">
                      ${totalProjectUSD.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Needs;