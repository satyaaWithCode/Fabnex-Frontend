// src/pages/Search.jsx
import { useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

// MASTER PRODUCT LIST (use your real data later)
const allProducts = [
  { id: 1, title: "Super Dri Fit - White", price: 1099, tag: "26% OFF", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800" },
  { id: 2, title: "Super Dri Fit - Black", price: 1099, tag: "26% OFF", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800" },
  { id: 3, title: "Stretchy Dri-Fit White", price: 599, tag: "57% OFF", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800" },
  { id: 4, title: "Stretchy Dri-Fit Navy Blue", price: 599, tag: "25% OFF", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800" },
  { id: 5, title: "Legacy Stringer - Black", price: 699, tag: "30% OFF", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800" },
  { id: 6, title: "Legacy Stringer - Blue", price: 699, tag: "12% OFF", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = allProducts.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SideMenu />

      {/* SEARCH BAR */}
      <div className="w-full px-4 md:px-20 bg-white border-b py-6 flex items-center justify-center gap-4">
        <div className="relative w-full max-w-3xl">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search here..."
            className="w-full border rounded-full py-2 pl-10 pr-10 text-sm bg-gray-100 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-3 text-gray-500"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <button onClick={() => (window.location.href = "/")} className="text-sm underline">
          CANCEL
        </button>
      </div>

      {/* CONTENT */}
      <div className="px-4 md:px-20 py-10 bg-white">
        {!query ? (
          <>
            <h2 className="font-bold tracking-wider mb-6 text-[18px]">POPULAR PRODUCTS</h2>
            <ProductGrid list={allProducts} />
          </>
        ) : (
          <>
            {filtered.length === 0 ? (
              <p>No products found...</p>
            ) : (
              <ProductGrid list={filtered} />
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

function ProductGrid({ list }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {list.map((p) => (
        <motion.div key={p.id} whileHover={{ scale: 1.04 }} className="cursor-pointer">
          <span className="absolute bg-black text-white text-[10px] px-2 py-[2px] rounded-full m-2">
            {p.tag}
          </span>
          <img src={p.img} className="w-full h-[240px] object-cover rounded-xl" />
          <h3 className="mt-2 text-[13px] font-semibold">{p.title}</h3>
          <p className="text-[12px] font-bold">₹{p.price}</p>
        </motion.div>
      ))}
    </div>
  );
}
