




// src/components/Navbar.jsx
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const menuLinks = [
    { label: "HOME", path: "/" },
    { label: "NEW LAUNCH 🔥", path: "/new-launch" },
    { label: "BEST SELLERS", path: "/best-sellers" },
    { label: "STRINGERS", path: "/stringers" },
    { label: "DRIFT", path: "/drift" },
    { label: "OVERSIZE", path: "/oversize" },
    { label: "POLO", path: "/polo" },
    { label: "HOODIES", path: "/hoodies" },
    { label: "BOTTOM", path: "/bottom" },
    { label: "SHOP ALL", path: "/shop-all" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-xl border-b border-white/20 px-5 md:px-12 py-3 flex items-center justify-between"
      >
        {/* LEFT */}
        <div className="flex items-center gap-5 text-black">
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => setOpenMenu(true)}>
            <Menu size={22} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            className="hidden sm:block"
            onClick={() => navigate("/search")}
          >
            <Search size={20} />
          </motion.button>
        </div>

        {/* CENTER LOGO */}
        <Link to="/">
          <motion.div whileHover={{ scale: 1.08 }} className="font-black tracking-[8px] text-[22px] sm:text-[26px]">
            FABNEX
          </motion.div>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-black">
          
          {/* UPDATED LOGIN REDIRECT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => navigate("/login")}  // 👈 ONLY CHANGE
          >
            <User size={21} />
          </motion.button>

          <motion.button whileHover={{ scale: 1.15 }} className="relative">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] rounded-full px-[6px] py-[1px]">
                {cartCount}
              </span>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* DRAWER MENU */}
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setOpenMenu(false)}
            />

            <motion.div
              initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
              className="fixed top-0 left-0 w-[300px] h-full bg-white z-50 p-7 shadow-xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold tracking-widest text-[13px] text-gray-700">MENU</h3>
                <button onClick={() => setOpenMenu(false)}>
                  <X size={24} />
                </button>
              </div>

              <ul className="space-y-2 text-[14px] font-semibold text-gray-800">
                {menuLinks.map((item, i) => (
                  <li key={i} onClick={() => setOpenMenu(false)}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 py-2 border-b border-gray-100 hover:text-black transition"
                    >
                      {item.label}
                      {item.label === "BEST SELLERS" && <span className="ml-auto w-2 h-2 bg-black rounded-full"></span>}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-[11px] text-gray-500 tracking-wider">
                © {new Date().getFullYear()} FABNEX STORE
                <br /> ALL RIGHTS RESERVED.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
