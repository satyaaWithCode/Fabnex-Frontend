export default function CompressionBanner() {
  return (
    <section className="relative w-full h-[260px] md:h-[350px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="text-center">
        <p className="text-xs opacity-75">NEW</p>
        <h2 className="text-xl md:text-3xl font-bold tracking-wide">
          SUPER DRI FIT <br /> COMPRESSION
        </h2>

        <button className="mt-3 px-6 py-1 border text-xs tracking-wider hover:bg-white hover:text-black transition">
          BUY NOW
        </button>
      </div>
    </section>
  );
}
