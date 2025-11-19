// src/pages/Drift.jsx
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const driftProducts = [
  {
    id: "drf-1",
    tag: "30% OFF",
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=900&q=80",
    title: "White Training Dri-Fit",
    price: 749
  },

  {
    id: "drf-3",
    tag: "52% OFF",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
    title: "Stretchy Dri-Fit Navy",
    price: 599
  },
  {
    id: "drf-4",
    tag: "28% OFF",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=80",
    title: "Pro Active Gym Tee",
    price: 899
  },
    {
    id: "drf-4",
    tag: "28% OFF",
    img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=900&q=80",
    title: "Pro Active Gym Tee",
    price: 899
  }
   
];


export default function Drift() {
  return (
    <>
      <SideMenu />
      <Navbar />

      <section className="w-full bg-white text-black pt-24 px-4 md:px-10 lg:px-20 pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[32px] md:text-[42px] font-extrabold tracking-[10px] mb-16"
        >
          DRIFT
        </motion.h2>

        {driftProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            No products available yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {driftProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group cursor-pointer"
              >
                <span className="absolute top-2 left-2 text-[10px] px-2 py-[3px] rounded-full bg-white/20 backdrop-blur border border-white/30 text-white z-20">
                  {p.tag}
                </span>

                <button className="absolute top-2 right-2 bg-white/70 rounded-full p-[6px] hover:bg-black hover:text-white transition z-20">
                  <Heart size={14} />
                </button>

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    src={p.img}
                    className="w-full h-[260px] object-cover"
                  />
                </motion.div>

                <div className="mt-3 text-center">
                  <h3 className="text-[13px] font-semibold tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-[12px] font-bold text-gray-800">
                    ₹{p.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
