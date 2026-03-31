import React from "react";
import { galleryImages } from "../data";
import { translations } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد ستايلات Swiper الأساسية
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ImageSlider = ({ lang }) => {
  const t = translations[lang].gallery;

  // المصوفة الذكية: تدمج الـ galleryImages مع الـ Caption المترجم
  const smartGallery = galleryImages.map((imgUrl, index) => ({
    id: index + 1,
    url: imgUrl,
    caption: t.photos[index] ? t.photos[index].caption : ""
  }));

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {t.title} <span className="text-[#1f7a5a]">{t.highlight}</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">{t.description}</p>
        </div>

        <Swiper
          key={lang}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
        >
          {smartGallery.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[300px] md:h-[500px] w-full">
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
