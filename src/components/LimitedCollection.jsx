


// src/components/LimitedCollection.jsx
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

const limitedProducts = [
  {
    id: "fab-6",
    tag: "45% OFF",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    title: "Ankle Fit Jeans",
    price: 1499,
  },
  {
    id: 2,
    tag: "25% OFF",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    title: "Jacket",
    oldPrice: 2000,
    price: 1499,
  },
  {
    id: 3,
    tag: "25% OFF",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
    title: "High-Enkle-Shoes",
    oldPrice: 2000,
    price: 1499,
  },
];

export default function LimitedCollection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-black px-4 md:px-10 lg:px-20 py-24">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-[28px] md:text-[40px] font-extrabold tracking-[10px] mb-14"
      >
        LIMITED COLLECTION
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {limitedProducts.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer select-none"
          >
            {/* Discount Tag */}
            <span className="absolute top-4 left-4 bg-white/25 backdrop-blur-xl border border-white/30 text-white text-[10px] px-2 py-1 rounded-full tracking-wider z-20 shadow-md">
              {p.tag}
            </span>

            {/* Wishlist Button */}
            <button className="absolute top-4 right-4 bg-white/70 hover:bg-black hover:text-white transition-all p-[6px] rounded-full shadow z-20 backdrop-blur-md">
              <Heart size={14}/>
            </button>

            {/* Product Card */}
            <motion.div
              whileHover={{ scale: 1.07, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
              className="relative overflow-hidden rounded-xl shadow-xl"
            >
              {/* Shine Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* Product Image */}
              <motion.img
                src={p.img}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.45 }}
                className="w-full h-[430px] object-cover"
              />

              {/* Quick Add to Cart Button */}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-[11px] px-4 py-[6px] rounded-full tracking-wider flex items-center gap-[6px]"
              >
                <ShoppingBag size={12}/> ADD TO CART
              </motion.button>
            </motion.div>

            {/* Text Info */}
            <div className="mt-3 text-center space-y-1">
              <h3 className="text-[13px] font-semibold tracking-wide">{p.title}</h3>

              {p.oldPrice && (
                <p className="text-[12px] text-gray-500 line-through">Rs. {p.oldPrice}</p>
              )}

              <p className="text-[14px] font-extrabold">Rs. {p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
