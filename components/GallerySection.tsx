"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "/images/couple1.avif",
  "/images/couple2.avif",
  "/images/couple3.avif",
  "/images/couple4.avif",
];

export default function GallerySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <p className="uppercase tracking-[5px] text-center text-primary">
        Gallery
      </p>

      <h2 className="font-heading text-3xl md:text-5xl text-center mt-4 mb-10">
        Moments To Cherish
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt=""
                width={1200}
                height={700}
                className="rounded-[40px] w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}