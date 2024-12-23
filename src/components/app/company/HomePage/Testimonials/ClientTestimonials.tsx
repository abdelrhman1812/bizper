// "use client";

// import { Star, StarHalf } from "lucide-react";
// import Image from "next/image";
// import { useCallback, useRef } from "react";
// import type { Swiper as SwiperType } from "swiper";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import ClientTestimonials from "./Testimonials/ClientTestimonials";

// const testimonials = [
//   {
//     rating: 4.5,
//     text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
//     name: "Clade Owen",
//     role: "CEO & Founder",
//     image: "/Image/Testimonial/testimonial-1.jpg",
//   },
//   {
//     rating: 4.5,
//     text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
//     name: "Nicolas Alvin",
//     role: "Web Developer",
//     image: "/Image/Testimonial/testimonial-2.jpg",
//   },
//   {
//     rating: 4.5,
//     text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
//     name: "Clade Owen",
//     role: "CEO & Founder",
//     image: "/Image/Testimonial/testimonial-1.jpg",
//   },
//   {
//     rating: 4.5,
//     text: "Its incredible. its really wonderful. company has completely surpassed our expect. Urna porttitor rhoncus dolor purus non enim praesent at the facilisis lectus. Adipiscing tristique risus.",
//     name: "Nicolas Alvin",
//     role: "Web Developer",
//     image: "/Image/Testimonial/testimonial-2.jpg",
//   },
// ];

// const ClientTestimonials = () => {
//   const swiperRef = useRef<SwiperType>();

//   const handlePrev = useCallback(() => {
//     swiperRef.current?.slidePrev();
//   }, []);

//   const handleNext = useCallback(() => {
//     swiperRef.current?.slideNext();
//   }, []);
//   return (

//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={32}
//       slidesPerView={0}
//       onBeforeInit={(swiper) => {
//         swiperRef.current = swiper;
//       }}
//       breakpoints={{
//         640: { slidesPerView: 1 },
//         1024: { slidesPerView: 2 },
//       }}
//       //   className="!overflow-visible"
//     >
//       {testimonials.map((testimonial, index) => (
//         <SwiperSlide key={index}>
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             {/* Rating */}
//             <div className="flex gap-1 mb-4">
//               {[...Array(5)].map((_, i) => {
//                 const filled = i < Math.floor(testimonial.rating);
//                 const half =
//                   i === Math.floor(testimonial.rating) &&
//                   testimonial.rating % 1 !== 0;
//                 return (
//                   <span key={i} className="text-yellow-400">
//                     {half ? (
//                       <StarHalf className="w-5 h-5" />
//                     ) : (
//                       <Star
//                         className="w-5 h-5"
//                         fill={filled ? "currentColor" : "none"}
//                       />
//                     )}
//                   </span>
//                 );
//               })}
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-gray-600 mb-6 min-h-[120px]">
//               {testimonial.text}
//             </p>

//             {/* Author */}
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
//                   6
//                 </div>
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   width={60}
//                   height={60}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm">{testimonial.role}</p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ClientTestimonials;
