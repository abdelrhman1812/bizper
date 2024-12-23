"use client";

import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Brands from "./Brands";

const testimonials = [
  {
    rating: 4.5,
    text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
    name: "Clade Owen",
    role: "CEO & Founder",
    image: "/Image/Testimonial/testimonial-1.jpg",
  },
  {
    rating: 4.5,
    text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
    name: "Nicolas Alvin",
    role: "Web Developer",
    image: "/Image/Testimonial/testimonial-2.jpg",
  },
  {
    rating: 4.5,
    text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
    name: "Clade Owen",
    role: "CEO & Founder",
    image: "/Image/Testimonial/testimonial-1.jpg",
  },
  {
    rating: 4.5,
    text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
    name: "Nicolas Alvin",
    role: "Web Developer",
    image: "/Image/Testimonial/testimonial-2.jpg",
  },
];

const Testimonials = () => {
  const swiperRef = useRef<SwiperType>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const testimonialStyle = {
    backgroundImage: "url('/Image/Testimonial/bg-01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      style={testimonialStyle}
      className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="relative flex items-center mb-5">
              <div className="absolute left-0 top-0 bottom-0 flex items-center  space-x-1">
                <div className="h-[15px] flex items-center w-[2px] bg-primary"></div>
                <div className="h-[20px] w-[2px] bg-primary"></div>
                <div className="h-[15px] flex items-center w-[2px] bg-primary"></div>
              </div>
              <span className="text-primary uppercase pl-8 font-bold">
                Client’s Testimonials
              </span>
            </div>
            <h2 className={`text-secondary text-4xl font-bold`}>
              What People Say About Our Company
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full border  border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={0}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          //   className="!overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white flex items-center rounded-2xl p-8 shadow-lg">
                {/*  */}
                <div className="flex  flex-col gap-3 w-[551px] mb-4">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => {
                      const filled = i < Math.floor(testimonial.rating);
                      const half =
                        i === Math.floor(testimonial.rating) &&
                        testimonial.rating % 1 !== 0;
                      return (
                        <span key={i} className="text-primary">
                          {half ? (
                            <StarHalf className="w-5 h-5" />
                          ) : (
                            <Star
                              className="w-5 h-5"
                              fill={filled ? "currentColor" : "none"}
                            />
                          )}
                        </span>
                      );
                    })}
                  </div>

                  {/* Testimonial Text */}
                  <div>
                    <p className="text-secondary text-base">
                      {testimonial.text}
                    </p>
                    <h3 className="font-semibold mt-5 text-secondary">
                      {testimonial.name}
                    </h3>
                    <p className="text-lightGray text-sm my-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex  gap-4">
                  <div className="relative">
                    <div className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
                      6
                    </div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={144}
                      height={220}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Brands */}
        <Brands />
      </div>
    </section>
  );
};

export default Testimonials;
