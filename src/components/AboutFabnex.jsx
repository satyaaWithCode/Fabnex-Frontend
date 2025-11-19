// src/components/AboutFabnex.jsx
import { motion } from "framer-motion";

export default function AboutFabnex() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-32 py-24">

      {/* Cinematic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562158074-146aebf0bdf3?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_rgba(255,255,255,0.09)]"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "-6px" }}
          whileInView={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1 }}
          className="text-[28px] md:text-[40px] font-black tracking-[8px]"
        >
          ABOUT FABNEX
        </motion.h2>

        {/* Gold Accent Underline */}
        <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mt-3 mb-7 rounded-full"></div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[15px] md:text-[17px] leading-relaxed text-gray-200 font-light"
        >
          Fabnex is a next-generation fashion brand built for those who believe
          <span className="font-semibold text-white"> style is identity.</span>
          Precision, minimalism, and fearless street culture shape every piece we create.
          <br /><br />
          Our mission is simple:
          <span className="text-yellow-300 font-semibold">
            {" "}empower individuality through bold, premium fashion.
          </span>{" "}
          From engineered fabrics to iconic silhouettes, Fabnex is crafted for the modern era.
        </motion.p>

        {/* Explore Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="mt-10 px-10 py-3 border border-white/40 rounded-full text-[12px] tracking-[3px] font-semibold hover:bg-white hover:text-black transition-all"
        >
          EXPLORE COLLECTION
        </motion.button>

        {/* Optional Signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-8 text-[12px] italic tracking-widest"
        >
          — Crafted With Vision, Worn With Confidence
        </motion.p>
      </motion.div>
    </section>
  );
}
