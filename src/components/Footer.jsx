// src/components/Footer.jsx
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black pt-24 pb-10 px-6 md:px-16 lg:px-28 overflow-hidden">

      {/* Luxury Noise Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* Soft radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),rgba(0,0,0,1))]"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

        {/* Column 1: Brand & About */}
        <div>
          <h3 className="text-[14px] tracking-[6px] text-gray-300">FABNEX</h3>
          <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-200 md:mx-0 mx-auto my-3 rounded-full"></div>

          <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs md:max-w-sm mx-auto md:mx-0">
            A next-generation fashion brand redefining modern streetwear,
            minimal luxury and performance craftsmanship for everyday legends.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 text-gray-300">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <Icon key={i} size={20} className="cursor-pointer hover:text-white transition" />
            ))}
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-[14px] tracking-[6px] text-gray-300">EXPLORE</h3>
          <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-200 md:mx-0 mx-auto my-3 rounded-full"></div>

          <ul className="text-[13px] space-y-2 text-gray-300 font-light">
            {[
              "Home",
              "New Launch 🔥",
              "Best Sellers",
              "Oversize",
              "Bottom",
              "Hoodies",
              "Shop All",
              "Track Order",
              "Support",
            ].map((item, i) => (
              <li key={i} className="hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-[14px] tracking-[6px] text-gray-300">CONTACT</h3>
          <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-200 md:mx-0 mx-auto my-3 rounded-full"></div>

          <div className="text-[13px] text-gray-300 space-y-3 font-light">
            <p className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={14}/> support@fabnex.store
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={14}/> +91 98765 43210
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 max-w-[200px] mx-auto md:mx-0">
              <MapPin size={14}/> Mumbai, Bengaluru, Bhubaneswar — India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center mt-16 border-t border-white/10 pt-6">
        <p className="text-[11px] text-gray-400 tracking-wider uppercase">
          © {new Date().getFullYear()} Fabnex Store — All Rights Reserved.
        </p>
        <p className="text-[11px] text-gray-500 mt-1">
          Terms & Conditions · Privacy Policy
        </p>
      </div>
    </footer>
  );
}
