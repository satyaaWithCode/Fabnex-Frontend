

// // src/components/Products.jsx
// import { motion } from "framer-motion";
// import { Heart, ShoppingBag } from "lucide-react";

// const products = [
//   {
//     id: "fab-1",
//     tag: "50% OFF",
//     img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
//     title: "Grey Jeans",
//     price: 1499,
//   },
//   {
//     id: "fab-2",
//     tag: "40% OFF",
//     img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
//     title: " Crossbody Sling Bag",
//     price: 1299,
//   },
//   {
//     id: "fab-3",
//     tag: "25% OFF",
//     img: "https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg?auto=compress&cs=tinysrgb&w=800",
//     title: "White Oversized Layerzz Tee",
//     price: 999,
//   },
//   {
//     id: "fab-4",
//     tag: "38% OFF",
//     img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
//     title: "Jacket",
//     price: 1199,
//   },
//   {
//     id: "fab-5",
//     tag: "30% OFF",
//     img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
//     title: "White T-Shirts",
//     price: 1399,
//   },
//   {
//     id: "fab-6",
//     tag: "45% OFF",
//     img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
//     title: "Ankle Fit Jeans",
//     price: 1499,
//   },
//   {
//     id: "fab-7",
//     tag: "28% OFF",
//     img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
//     title: "High-Enkle-Shoes",
//     price: 899,
//   },
//   {
//     id: "fab-8",
//     tag: "60% OFF",
//     img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
//     title: "Cotton Shirts",
//     price: 1299,
//   },
// ];

// export default function Products() {
//   return (
//     <section
//       id="new-drop"
//       className="w-full bg-white text-black pt-24 px-4 md:px-10 lg:px-20 pb-24 overflow-hidden"
//     >
//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center text-[28px] md:text-[40px] font-extrabold tracking-[10px] mb-16"
//       >
//         NEW DROP
//       </motion.h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((p, i) => (
//           <motion.div
//             key={p.id}
//             initial={{ opacity: 0, y: 45 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="relative group cursor-pointer select-none"
//           >
//             {/* Tag Badge */}
//             <span className="absolute top-2 left-2 px-2 py-[3px] text-[10px] tracking-wider bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 z-20">
//               {p.tag}
//             </span>

//             {/* Wishlist Heart */}
//             <button className="absolute top-2 right-2 bg-white/70 hover:bg-black hover:text-white transition rounded-full p-[6px] z-20 backdrop-blur-md shadow">
//               <Heart size={14} />
//             </button>

//             {/* Card */}
//             <motion.div
//               whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
//               transition={{ type: "spring", stiffness: 140, damping: 10 }}
//               className="relative overflow-hidden rounded-xl shadow-lg"
//             >
//               {/* Light sweep/shine */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

//               {/* Product Image */}
//               <motion.img
//                 src={p.img}
//                 alt={p.title}
//                 whileHover={{ scale: 1.14 }}
//                 transition={{ duration: 0.45 }}
//                 className="w-full h-[260px] object-cover"
//               />

//               {/* Quick Add to Cart */}
//               <motion.button
//                 initial={{ opacity: 0, y: 10 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.35 }}
//                 className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-[11px] px-4 py-[6px] rounded-full tracking-wider flex items-center gap-1"
//               >
//                 <ShoppingBag size={12} /> ADD TO CART
//               </motion.button>
//             </motion.div>

//             {/* Info */}
//             <div className="mt-3 text-center">
//               <h3 className="text-[13px] font-semibold tracking-wide">
//                 {p.title}
//               </h3>
//               <p className="text-[12px] font-bold text-gray-800">₹{p.price}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }







// src/components/Products.jsx
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";   // <-- added

const products = [
  {
    id: "fab-1",
    tag: "50% OFF",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    title: "Grey Jeans",
    price: 1499,
  },
  {
    id: "fab-2",
    tag: "40% OFF",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    title: " Crossbody Sling Bag",
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
    id: "fab-4",
    tag: "38% OFF",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    title: "Jacket",
    price: 1199,
  },
  {
    id: "fab-5",
    tag: "30% OFF",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    title: "White T-Shirts",
    price: 1399,
  },
  {
    id: "fab-6",
    tag: "45% OFF",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    title: "Ankle Fit Jeans",
    price: 1499,
  },
  {
    id: "fab-7",
    tag: "28% OFF",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
    title: "High-Enkle-Shoes",
    price: 899,
  },
  {
    id: "fab-8",
    tag: "60% OFF",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    title: "Cotton Shirts",
    price: 1299,
  },
];

export default function Products() {
  return (
    <section
      id="new-drop"
      className="w-full bg-white text-black pt-24 px-4 md:px-10 lg:px-20 pb-24 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[28px] md:text-[40px] font-extrabold tracking-[10px] mb-16"
      >
        NEW DROP
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <Link key={p.id} to={`/product/${p.id}`}>   {/* <-- added wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer select-none"
            >
              {/* Tag Badge */}
              <span className="absolute top-2 left-2 px-2 py-[3px] text-[10px] tracking-wider bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 z-20">
                {p.tag}
              </span>

              {/* Wishlist Heart */}
              <button className="absolute top-2 right-2 bg-white/70 hover:bg-black hover:text-white transition rounded-full p-[6px] z-20 backdrop-blur-md shadow">
                <Heart size={14} />
              </button>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.06, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 140, damping: 10 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                <motion.img
                  src={p.img}
                  alt={p.title}
                  whileHover={{ scale: 1.14 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-[260px] object-cover"
                />

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-[11px] px-4 py-[6px] rounded-full tracking-wider flex items-center gap-1"
                >
                  <ShoppingBag size={12} /> ADD TO CART
                </motion.button>
              </motion.div>

              {/* Info */}
              <div className="mt-3 text-center">
                <h3 className="text-[13px] font-semibold tracking-wide">
                  {p.title}
                </h3>
                <p className="text-[12px] font-bold text-gray-800">₹{p.price}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
