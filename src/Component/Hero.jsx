import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          من قلب الركام .. نصنع <span className="text-[#1f7a5a]">نقطة وصل</span>{" "}
          للتعليم
        </h1>
        <h3 className="text-xl md:text-2xl text-[#D4AF37] font-bold mb-6">
          المكان جاهز.. وبدعمكم يبدأ التعليم
        </h3>
        <p className="text-lg mb:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          نحول المساحات المدمرة في خانيونس إلى مراكز تعليمية مزودة بالطاقة
          الشمسية والإنترنت، لنعيد ربط طلابنا بمستقبلهم.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#1f7a5a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#165a42] transition-all shadow-lg hover:shadow-xl">
            تبرع للمساحة المدمرة الآن
          </button>
          <button className="w-full sm:w-auto border-2 border-[#1f7a5a] text-[#1f7a5a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all ">
            شاهد اثرنا الميداني
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
