import React from "react";

{
  /* الخطوات القادمة تعتمد على هذه الاستيرادات */
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد ستايلات Swiper الأساسية
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = ({ photos }) => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            معرض <span className="text-[#1f7a5a]">الميدان</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">توثيق حي للمساحة المتاحة في خانيونس وخطواتنا الأولى</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
        >
          {photos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[300 md:h-[500px] w-full">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-bold text-right">
                    {item.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
  };

export default ImageSlider;
