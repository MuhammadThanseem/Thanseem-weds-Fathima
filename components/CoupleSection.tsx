"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/couple.jpg"
            alt="Couple"
            width={600}
            height={700}
            className="rounded-[40px] shadow-xl w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-primary">
            The Couple
          </p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl mt-6">
            Fathima Barza
          </h2>

          <p className="text-accent text-2xl md:text-4xl my-4">
            &
          </p>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl">
            Muhammed Saneed
          </h2>

          <p className="mt-6 md:mt-8 leading-7 md:leading-8 text-muted text-base md:text-lg">
            With the blessings of Allah and our families,
            we joyfully invite you to celebrate our wedding
            and share in the beginning of our forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}