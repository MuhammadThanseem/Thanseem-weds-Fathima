import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function EventsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
          Events
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-center mt-6 mb-4"
        >
          Join Our Celebration
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto mb-16"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {[weddingData.nikah, weddingData.reception].map(
            (event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group invitation-card hover-lift p-8 md:p-12 relative overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                    viewport={{ once: true }}
                    className="font-heading text-3xl md:text-4xl text-foreground"
                  >
                    {event.title}
                  </motion.h3>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="decorative-line h-1 my-6"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.15 }}
                    viewport={{ once: true }}
                    className="space-y-4 mt-8"
                  >
                    <EventDetail label="Date" value={event.date} />
                    <EventDetail label="Time" value={event.time} />
                    <EventDetail label="Venue" value={event.venue} />
                    <EventDetail label="Address" value={event.address} />
                  </motion.div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}

function EventDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-2">
      <strong className="text-primary font-light uppercase tracking-wide text-sm">
        {label}:
      </strong>
      <span className="text-muted font-light">{value}</span>
    </div>
  );
}