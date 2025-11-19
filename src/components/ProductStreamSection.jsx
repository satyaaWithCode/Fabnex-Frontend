// src/components/ProductStreamSection.jsx

const galleryImages = [
 "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
];

export default function ProductStreamSection() {
  return (
    <section className="w-full bg-white text-black px-4 md:px-10 lg:px-20 pt-28 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: thumbnails + main image */}
        <div className="flex gap-4">
          {/* thumbnails */}
          <div className="flex flex-col gap-3">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-20 h-24 object-cover rounded-md border border-gray-200 hover:border-black cursor-pointer transition-all duration-300"
              />
            ))}
          </div>

          {/* main image */}
          <div className="w-full h-[550px] overflow-hidden rounded-xl shadow-md">
            <img
              src={galleryImages[0]}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT: product info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[28px] md:text-[40px] font-extrabold leading-tight mb-2 tracking-tight">
            Crossbody Sling Bag
          </h1>

          <p className="text-[11px] tracking-[4px] text-gray-500 mb-4">
            FABNEX
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 text-lg font-semibold mb-8">
            <span className="text-[22px] font-bold">Rs. 1,499.00</span>
            <span className="text-gray-500 line-through text-sm">
              Rs. 2,000.00
            </span>
          </div>

          {/* SIZE */}
          <div className="mb-8">
            <p className="text-sm font-semibold mb-3">SIZE</p>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 rounded-full border border-gray-400 text-sm hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button className="border border-black rounded-full py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}
