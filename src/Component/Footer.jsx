import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // رابط الواتساب مع رسالة تلقائية
  const whatsappNumber = "970598726980"; // ضع رقمك هنا بالصيغة الدولية
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن مبادرة نقطة وصل وكيفية المساهمة")}`;

  return (
    <footer className="bg-[#0f172a] text-gray-300">
      {/* قسم الموقع الجغرافي (تفاعلي) */}
      <div className="w-full h-64 bg-gray-200 relative">
        {/* يمكنك استبدال الرابط أدناه برابط Google Maps الحقيقي لموقعك في خانيونس */}
        <iframe 
          title="موقع نقطة وصل"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2808.487839335709!2d34.295562149999995!3d31.3464366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIwJzQxLjYiTiAzNMKwMTcnMzUuNSJF!5e1!3m2!1sar!2s!4v1772804132238!5m2!1sar!2s" 
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
        <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg text-gray-800 flex items-center gap-2 pointer-events-none">
          <FaMapMarkerAlt className="text-[#1f7a5a]" />
          <span className="text-sm font-bold">موقع المبادرة - خانيونس</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* العمود الأول: الهوية */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">نقطة <span className="text-[#D4AF37]">وصل</span></h3>
            <p className="text-sm leading-relaxed text-gray-400">
              مبادرة تهدف لربط الطلاب بفرصهم التعليمية من خلال توفير بيئة تقنية متكاملة وطاقة مستدامة وسط أصعب الظروف.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-r-4 border-[#1f7a5a] pr-3">وصول سريع</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-[#D4AF37] transition-all">الرئيسية</a>
              <a href="#roadmap" className="hover:text-[#D4AF37] transition-all">خارطة الطريق</a>
              <a href="#impact" className="hover:text-[#D4AF37] transition-all">ميزانية الأثر</a>
            </nav>
          </div>

          {/* العمود الثالث: تواصل مباشر (جاهز) */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-r-4 border-[#1f7a5a] pr-3">اترك أثراً</h4>
            <div className="flex flex-col gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 bg-[#1f7a5a] hover:bg-[#165a42] text-white px-4 py-2 rounded-xl transition-all w-fit">
                <FaWhatsapp size={20} />
                <span className="text-sm font-bold">تواصل عبر واتساب</span>
              </a>
              
              <a href="https://t.me/noqtat_wasl" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all w-fit">
                <FaTelegramPlane size={20} />
                <span className="text-sm font-bold">قناة التليجرام</span>
              </a>
            </div>
          </div>

        </div>

        {/* سطر الحقوق */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} جميع الحقوق محفوظة لمبادرة نقطة وصل</p>
          <div className="flex items-center gap-2">
            <span>صُنع بشغف في غزة</span>
            <span className="text-red-600 animate-pulse">❤️</span>
            <span className="font-bold">فلسطين 🇵🇸</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;