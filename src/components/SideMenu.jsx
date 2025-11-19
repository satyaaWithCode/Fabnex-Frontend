

// src/components/SideMenu.jsx
import { House, Flame, Headset, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SideMenu() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { icon: <House size={20} />, label: "Home" },
    { icon: <Flame size={20} />, label: "Hot Products" },
    { icon: <Headset size={20} />, label: "Support" },
    { icon: <PackageSearch size={20} />, label: "Track Order" },
  ];

  const handleMenuClick = (label) => {
    setActive(label);

    if (label === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (label === "Hot Products") {
      window.location.href = "/hot-products"; // change if routing not used
    }

    if (label === "Support") {
      window.open(
        "https://api.whatsapp.com/send?phone=919205396494&text=Hello%20Team%20Fabnex%20👋",
        "_blank"
      );
    }

    if (label === "Track Order") {
      window.open("https://app.shipmozo.com/track-order", "_blank");
    }
  };

  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <div className="hidden sm:flex fixed right-4 top-1/3 z-50 flex-col gap-4 p-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={active === item.label}
            onClick={() => handleMenuClick(item.label)}
          />
        ))}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="sm:hidden fixed bottom-3 w-full flex justify-center z-50">
        <div className="flex bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 rounded-2xl px-7 py-3 gap-7">
          {menuItems.map((item) => (
            <MenuItemMobile
              key={item.label}
              icon={item.icon}
              active={active === item.label}
              onClick={() => handleMenuClick(item.label)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* Desktop Button */
function MenuItem({ icon, label, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: -6 }}
      className={`relative flex flex-col justify-center items-center 
      px-3 py-2 rounded-xl w-[70px] transition-all
      shadow-lg backdrop-blur-xl border
      ${
        active
          ? "bg-black text-white border-black"
          : "bg-white/90 text-black border-white/80 hover:bg-black hover:text-white"
      }
      `}
    >
      {icon}
      <span className="text-[10px] mt-1 font-medium">{label}</span>
    </motion.button>
  );
}

/* Mobile Button */
function MenuItemMobile({ icon, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      className={`transition-all ${
        active ? "text-black bg-white rounded-lg px-2 py-1" : "text-white"
      }`}
    >
      {icon}
    </motion.button>
  );
}
