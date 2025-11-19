// src/components/BlogPosts.jsx
export default function BlogPosts() {
  const blogs = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
      title: "FABNEX OVERSIZED T-SHIRTS: REDEFINING COMFORT & STYLE",
      date: "SEPTEMBER 16, 2024",
      short:
        "In the ever-evolving world of fashion, where trends come and go faster than you can imagine...",
      link: "#",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1598971639058-96a7dfec3b59?auto=format&fit=crop&w=900&q=80",
      title: "THE SCIENCE BEHIND PREMIUM NECK LOGO T-SHIRT",
      date: "NOVEMBER 17, 2023",
      short:
        "When it comes to athletic performance, every detail matters. From the right shoes to the perfect...",
      link: "#",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1598387993411-5cc67b85e8b5?auto=format&fit=crop&w=900&q=80",
      title: "WHY YOU NEED A NECK LOGO COMPRESSION T-SHIRT",
      date: "NOVEMBER 17, 2023",
      short:
        "Are you tired of uncomfortable workout t-shirts that restrict movement? Look no further...",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white text-black px-4 md:px-10 lg:px-20 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide mb-12">
        BLOG POSTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((b) => (
          <div key={b.id} className="cursor-pointer group">
            <img
              src={b.img}
              alt={b.title}
              className="w-full h-[430px] object-cover rounded-md group-hover:brightness-75 transition"
            />
            <h3 className="mt-4 text-[13px] tracking-wide text-gray-500">
              {b.date}
            </h3>
            <h2 className="font-semibold mt-1 text-[15px] leading-tight">
              {b.title}
            </h2>
            <p className="text-[13px] text-gray-600 mt-2 line-clamp-2">{b.short}</p>
            <a className="inline-block mt-2 text-[12px] font-semibold underline">
              CONTINUE READING
            </a>
          </div>
        ))}
      </div>

      <div className="w-full text-center mt-10">
        <button className="px-5 py-2 border border-black text-[13px] rounded-full hover:bg-black hover:text-white transition">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
