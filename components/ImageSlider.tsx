// components/ImageSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

export default function ImageSlider() {
  return (
    <div className="bg-black py-10">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // 천천히 움직이는 효과
        slidesPerView={"auto"}
        spaceBetween={30}
        className="flex items-center"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "auto" }}
            className="!w-auto flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              // className="w-[300px] h-[200px] object-cover rounded-xl"
              className="w-[600px] h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
