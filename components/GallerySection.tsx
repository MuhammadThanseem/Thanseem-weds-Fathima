"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const images = [
  "/images/couple-1.avif",
  "/images/couple-2.avif",
  "/images/couple-3.avif",
];

export default function GallerySection() {
  return (
    <section className="py-28 px-6">
      <p className="uppercase tracking-[5px] text-center text-[#A67C52]">
        Gallery
      </p>

      <h2 className="font-heading text-5xl text-center mt-4 mb-14">
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
                className="rounded-[40px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}