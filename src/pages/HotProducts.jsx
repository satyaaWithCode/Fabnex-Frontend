// src/pages/HotProducts.jsx
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

const hotProducts = [
  { id: "fab-1", tag: "40% OFF", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80", title: "Grey Track Pants", price: 1499 },
  { id: "fab-2", tag: "40% OFF", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80", title: "Crossbody Sling Bag", price: 1299 },
  { id: "fab-3", tag: "50% OFF", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80", title: "Thunder Hoodie", price: 1499 },
  { id: "fab-4", tag: "38% OFF", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80", title: "Jacket", price: 1199 },
  { id: "fab-5", tag: "25% OFF", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80", title: "Mesh Gym Vest", price: 999 },
  { id: "fab-6", tag: "35% OFF", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", title: "White Performance Tee", price: 1299 },
  { id: "fab-7", tag: "30% OFF", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80", title: "Ankle Fit Jeans", price: 1499 },
  { id: "fab-8", tag: "20% OFF", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80", title: "Layerzz Street Jacket", price: 1999 },
];

export default function HotProducts() {
  return (
    <>
      <SideMenu />
      <Navbar />

      <section className="w-full bg-white text-black pt-24 px-4 md:px-10 lg:px-20 pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[32px] md:text-[44px] font-extrabold tracking-[10px] mb-16"
        >
          HOT PRODUCTS
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {hotProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative group"
            >
              {/* Discount Tag */}
              <span className="absolute top-3 left-3 z-20 bg-black/80 text-white text-[10px] px-2 py-[3px] rounded-full tracking-wide shadow-md">
                {p.tag}
              </span>

              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 z-20 bg-white/90 rounded-full p-[6px] shadow hover:bg-black hover:text-white transition">
                <Heart size={15} />
              </button>

              {/* Product Image */}
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl overflow-hidden shadow-md bg-gray-100"
              >
                <img
                  src={p.img}
                  className="w-full h-[270px] object-cover group-hover:brightness-90 transition-all duration-300"
                />
              </motion.div>

              {/* Product Info */}
              <div className="text-center mt-3 space-y-[2px]">
                <h3 className="text-[13px] font-semibold tracking-wide">{p.title}</h3>
                <p className="text-[12px] font-bold text-gray-900">₹{p.price}</p>
              </div>

              {/* Add To Cart Floating Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-[11px] px-4 py-[6px] rounded-full flex items-center gap-1 shadow-lg"
              >
                <ShoppingBag size={14} /> Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
