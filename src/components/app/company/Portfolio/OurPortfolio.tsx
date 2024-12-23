"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      img: "/Image/portfolio/portfolio-1.png",
      title: "Executive Design Kit",
      subtitle: "Financial advisory",
    },
    {
      img: "/Image/portfolio/portfolio-2.png",
      title: "Executive Layout Set",
      subtitle: "Financial advisory",
    },
    {
      img: "/Image/portfolio/portfolio-3.png",
      title: "Marketing Strategy",
      subtitle: "Digital Marketing",
    },
    {
      img: "/Image/portfolio/portfolio-4.png",
      title: "Creative Solutions",
      subtitle: "Design & Branding",
    },
    {
      img: "/Image/portfolio/portfolio-5.png",
      title: "Creative Solutions",
      subtitle: "Design & Branding",
    },
    {
      img: "/Image/portfolio/portfolio-6.png",
      title: "Creative Solutions",
      subtitle: "Design & Branding",
    },
  ];

  return (
    <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2  w-full py-24">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={5000}
        // className="container mx-auto"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 3000,

          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative  rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform scale-90 hover:scale-100">
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={280}
                height={340}
                className="sm:w-full object-cover w-60 block mx-auto"
                priority
                loading="eager"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-red-500 transition-all duration-300 ${
                  index === activeIndex ? "opacity-30" : "opacity-0"
                }`}
              ></div>
              {/* Content */}
              <div className="absolute bottom-5 left-5 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}np
                </h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurPortfolio;
