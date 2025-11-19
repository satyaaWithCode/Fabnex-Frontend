// src/components/FAQSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "WHAT IS THE TYPICAL SHIPPING TIME FOR ORDERS FROM FABNEX?",
    a: "Orders are usually shipped within 2-5 business days depending on your location.",
  },
  {
    q: "WHAT IS YOUR REFUND POLICY?",
    a: "We accept returns within 7 days of delivery if the product is unused and tags are intact.",
  },
  {
    q: "CAN I CHANGE OR CANCEL MY ORDER AFTER IT'S BEEN PLACED?",
    a: "Orders can be changed or canceled within 12 hours of purchase by contacting support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full py-32 px-4 md:px-24 lg:px-48 bg-gradient-to-b from-white via-gray-100/60 to-white overflow-hidden">

      {/* Soft floating texture noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-[32px] md:text-[44px] font-extrabold tracking-[10px] text-black"
      >
        FAQS
      </motion.h2>

      {/* Luxury Gold Accent */}
      <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mt-3 mb-14 rounded-full shadow-[0_0_12px_rgba(255,215,0,0.6)]"></div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-5 relative z-10">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="rounded-2xl border border-black/10 bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="relative w-full flex justify-between items-center text-left px-6 py-5 text-[14px] md:text-[15px] font-semibold tracking-wide text-black select-none"
              >
                {item.q}

                {/* Icon */}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35 }}>
                  <ChevronDown size={20} />
                </motion.span>

                {/* Underline swipe effect */}
                <motion.span
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 bottom-0 w-full h-[2px] origin-left bg-gradient-to-r from-yellow-400 to-yellow-200"
                ></motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-5 text-gray-700 text-[14px] leading-relaxed"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
