



// src/components/ShopTheLook.jsx
import { motion } from "framer-motion";

export default function ShopTheLook() {
  const product = {
    tag: "NEW",
    img: "https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg?auto=compress&cs=tinysrgb&w=900",
    imgSmall: "https://images.pexels.com/photos/6311581/pexels-photo-6311581.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "DOMINATE OVERSIZED TEE",
    price: 1599,
    oldPrice: 1999,
  };

  return (
    <section className="w-full bg-white text-black py-24 px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[22px] md:text-[34px] font-extrabold tracking-[8px] text-black mb-14"
      >
        SHOP THE LOOK
      </motion.h2>

      {/* Product container */}
      <div className="flex justify-center relative">

        {/* Parallax Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative w-[360px] md:w-[440px] overflow-hidden rounded-xl shadow-xl cursor-pointer"
        >
          {/* Spotlight Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40 pointer-events-none" />

          <motion.img
            src={product.img}
            className="w-full h-full object-cover"
            animate={{}}
          />

          {/* Floating NEW tag */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-wider px-3 py-[3px] rounded-full"
          >
            {product.tag}
          </motion.span>

          {/* Glass Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/40 px-4 py-2 rounded-lg border border-white/30 text-center shadow-md"
          >
            <p className="text-[11px] font-semibold">{product.title}</p>
            <p className="text-[10px] line-through text-gray-700">
              Rs. {product.oldPrice}.00
            </p>
            <p className="text-[12px] font-bold">Rs. {product.price}.00</p>
          </motion.div>
        </motion.div>

        {/* Thumbnail Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute right-[16%] top-1/2 -translate-y-1/2 hidden md:block"
        >
          <div className="bg-white rounded-lg p-1 shadow-lg border w-32 hover:shadow-2xl transition">
            <img
              src={product.imgSmall}
              className="w-full rounded-md object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-10"
      >
        <button className="px-8 py-2 border border-black rounded-full text-[12px] tracking-widest hover:bg-black hover:text-white transition uppercase">
          Buy This Look
        </button>
      </motion.div>

    </section>
  );
}
