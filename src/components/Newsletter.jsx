




// src/components/Newsletter.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter an email!");
    alert(`Subscribed successfully: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-white via-gray-100 to-white text-black overflow-hidden">

      {/* Noise Texture Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/gray-floral.png')]"></div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl mx-auto text-center bg-white/30 backdrop-blur-xl rounded-3xl px-6 md:px-10 py-12 border border-white/20 shadow-xl"
      >
        {/* Tagline */}
        <p className="text-[11px] tracking-[6px] text-gray-600 mb-3 font-medium">
          STAY UPDATED
        </p>

        {/* Title */}
        <h2 className="text-[26px] md:text-[34px] font-extrabold tracking-[6px] mb-3">
          JOIN OUR NEWSLETTER
        </h2>

        {/* Gold Accent Line */}
        <div className="w-16 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mb-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed mb-8 font-medium">
          Get early access to drops, exclusive offers, and the latest Fabnex fashion insights.
        </p>

        {/* Input + Button */}
        <div className="flex justify-center">
          <div className="flex items-center w-[260px] md:w-[340px] border border-black/60 rounded-full overflow-hidden bg-white/60 backdrop-blur-md shadow-sm focus-within:shadow-lg transition">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-sm py-3 px-4 bg-transparent placeholder-gray-600 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              onClick={handleSubscribe}
              className="px-4 py-3 bg-black text-white text-xs tracking-wider font-semibold flex items-center gap-1"
            >
              Subscribe <Send size={14} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
