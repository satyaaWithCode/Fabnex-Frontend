


// src/components/BestSellers.jsx
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import clsx from "clsx";


const bestSellers = [
  {
    id: 1,
    tag: "50% OFF",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    title: "Jacket",
    oldPrice: 2999,
    price: 1499,
    rating: 4.9,
    link: "/product/thunder-hoodie",
  },
{
  id: "fab-6",
  tag: "45% OFF",
  img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  title: "Jeans",
  price: 1499
},
  {
    id: 3,
    tag: "25% OFF",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
    title: "Shoes",
    oldPrice: 2000,
    price: 1499,
  },
  {
  id: "fab-1",
  tag: "50% OFF",
  img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  title: "Grey Jeans",
  price: 1499
}
];


export default function BestSellers() {
  return (
    <section className="w-full bg-white text-black px-4 md:px-10 lg:px-20 py-24 overflow-hidden">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[26px] md:text-[38px] font-extrabold tracking-[8px] mb-16"
      >
        BEST SELLERS
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {bestSellers.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Floating Discount Tag */}
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute top-3 left-3 text-[10px] px-3 py-[4px] rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold z-20"
            >
              {p.tag}
            </motion.span>

            {/* Wishlist Heart */}
            <motion.button
              whileTap={{ scale: 0.6 }}
              className="absolute top-3 right-3 bg-white/70 backdrop-blur-md rounded-full p-[7px] shadow z-20 hover:bg-black hover:text-white transition"
            >
              <Heart size={14} />
            </motion.button>

            {/* Product Image + Shine Effect */}
            <motion.div
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative overflow-hidden rounded-xl shadow-xl"
            >
              {/* Shine layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

              <motion.img
                src={p.img}
                className="w-full h-[420px] object-cover"
              />
            </motion.div>

            {/* Product Details */}
            <div className="mt-3 text-center space-y-1">
              <p className="text-[13px] font-semibold tracking-wide">{p.title}</p>

              <p className="text-[11px] text-yellow-500">★ {p.rating}</p>

              {p.oldPrice && (
                <p className="text-[12px] text-gray-500 line-through">
                  Rs. {p.oldPrice}
                </p>
              )}

              <p className="text-[15px] font-extrabold">Rs. {p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <button className="px-10 py-3 border border-black rounded-full text-[12px] tracking-[4px] hover:bg-black hover:text-white transition uppercase">
          View All Products
        </button>
      </motion.div>
    </section>
  );
}
