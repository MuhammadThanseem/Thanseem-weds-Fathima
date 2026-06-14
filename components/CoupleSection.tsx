"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            className="rounded-[40px] shadow-xl"
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
          <p className="uppercase tracking-[5px] text-[#A67C52]">
            The Couple
          </p>

          <h2 className="font-heading text-6xl mt-6">
            Fathima Barza
          </h2>

          <p className="text-[#C9A227] text-4xl my-4">
            &
          </p>

          <h2 className="font-heading text-6xl">
            Muhammed Saneed
          </h2>

          <p className="mt-8 leading-8 text-gray-700">
            With the blessings of Allah and our families,
            we joyfully invite you to celebrate our wedding
            and share in the beginning of our forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}