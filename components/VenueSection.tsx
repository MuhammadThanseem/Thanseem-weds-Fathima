import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function VenueSection() {
  // Google Maps embed URL for Calicut, Kerala wedding location
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8474845326743!2d75.78412!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6599999999999%3A0x123456789!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-center text-primary font-light text-sm"
        >
          Venue
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center mt-6 mb-4"
        >
          Find Your Way
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto mb-16"
        />

        {/* Venue Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
          {[weddingData.nikah, weddingData.reception].map(
            (event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="invitation-card hover-lift p-8 md:p-10"
              >
                <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                  {event.title}
                </h3>

                <div className="decorative-line h-1 my-6 w-12" />

                <p className="text-foreground font-light leading-relaxed">
                  {event.venue}
                </p>

                <p className="text-muted mt-3 text-sm">
                  {event.address}
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-4 rounded-full bg-primary text-white btn-modern hover:shadow-lg transition-all"
                  >
                    Directions
                  </a>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-4 rounded-full bg-accent/10 text-primary border-2 border-primary/20 text-center font-light cursor-default"
                  >
                    📍 {event.time}
                  </motion.div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Google Maps Integration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden premium-shadow"
          >
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
              className="w-full h-96 md:h-[500px]"
            />
          </motion.div>

          {/* Location Info Below Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-muted font-light">
              📍 Calicut, Kerala • Wedding Date: 08 August 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}