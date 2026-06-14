import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    icon: "📸",
    url: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    icon: "f",
    url: "https://facebook.com",
    color: "hover:text-blue-500",
  },
  {
    name: "WhatsApp",
    icon: "💬",
    url: "https://wa.me/",
    color: "hover:text-green-500",
  },
  {
    name: "YouTube",
    icon: "▶️",
    url: "https://youtube.com",
    color: "hover:text-red-500",
  },
];

export default function FooterSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl text-foreground"
        >
          Thank You
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="decorative-line h-1 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-muted font-light leading-relaxed"
        >
          We look forward to celebrating this special day with you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12 text-primary font-heading text-2xl md:text-3xl tracking-wide"
        >
          Fathima Barza & Muhammed Saneed
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary/20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            className="text-muted text-sm font-light mb-6"
          >
            Connect With Us
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border-2 border-primary/30 font-light text-lg transition-all duration-300 ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Date and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary/20 space-y-2"
        >
          <p className="text-muted text-sm font-light">
            📅 08 August 2026
          </p>
          <p className="text-muted text-xs font-light opacity-70">
            © 2026 Fathima & Saneed. All blessings to our union.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}