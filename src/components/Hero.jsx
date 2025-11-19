


import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ⬅ import Link

export default function Hero() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white relative px-4 z-[20]"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

      <motion.h1
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[14vw] sm:text-[10vw] md:text-[120px] font-black tracking-widest text-center relative z-10"
      >
        FABNEX
      </motion.h1>

      {/* SHOP NOW Button with Link */}
      <Link to="/hot-products">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="relative z-10 mt-4 border border-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white hover:text-black transition-all uppercase"
        >
          SHOP NOW
        </motion.button>
      </Link>

      <div className="absolute bottom-0 w-full bg-white/10 text-center py-2 text-xs sm:text-sm tracking-wide backdrop-blur z-10">
        Get Flat 10% off, use code <b>"FABNEX"</b>
      </div>
    </section>
  );
}
