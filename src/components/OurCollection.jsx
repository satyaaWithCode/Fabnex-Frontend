




// src/components/OurCollection.jsx
import { motion } from "framer-motion";

const categories = [
  {
    name: "OVERSIZE",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fab-2",
    tag: "40% OFF",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    title: "Grey Heavy Joggers",
    price: 1299,
  },
  {
    id: "fab-3",
    tag: "25% OFF",
    img: "https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "White Oversized Layerzz Tee",
    price: 999,
  },
  {
    id: "fab-8",
    tag: "60% OFF",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    title: "Black Mask Muscle Tee",
    price: 1299,
  },
  {
    id: "fab-6",
    tag: "45% OFF",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    title: "Streetwear Cargo Joggers",
    price: 1499,
  },
  {
    name: "SHOES",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function OurCollection() {
  return (
    <section className="w-full bg-white text-black py-28 px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* Lux Title */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center text-[28px] md:text-[40px] font-extrabold tracking-[10px]"
      >
        OUR COLLECTION
      </motion.h2>
      <div className="w-16 h-[2px] bg-black mx-auto mt-4 mb-16"></div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer select-none"
          >
            {/* Discount Pill */}
            {c.tag && (
              <span className="absolute top-3 left-3 bg-white/20 text-white text-[10px] backdrop-blur-xl tracking-wider px-3 py-[3px] rounded-full border border-white/30 z-20 shadow">
                {c.tag}
              </span>
            )}

            {/* Card with 3D & Shine */}
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="overflow-hidden rounded-xl shadow-xl relative"
            >
              {/* Shine streak */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/40 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <motion.img
                src={c.img}
                className="w-full h-[310px] object-cover"
                whileHover={{ scale: 1.10 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Label */}
            <p className="mt-3 text-center text-[12px] font-semibold tracking-[3px]">
              {c.name || c.title}
            </p>

            {/* Price */}
            {c.price && (
              <p className="text-center text-[12px] font-bold text-gray-700 tracking-wide">
                Rs. {c.price}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <button className="px-10 py-2 border border-black rounded-full text-[12px] tracking-[4px] hover:bg-black hover:text-white transition uppercase">
          View Full Collection
        </button>
      </motion.div>
    </section>
  );
}
