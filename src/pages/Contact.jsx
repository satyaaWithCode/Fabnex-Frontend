// src/pages/Contact.jsx
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <SideMenu />
      <Navbar />
      <section className="w-full bg-white text-black pt-24 px-4 md:px-10 lg:px-20 pb-24">
        <h2 className="text-center text-[32px] md:text-[42px] font-extrabold tracking-[10px] mb-10">
          CONTACT US
        </h2>

        <div className="max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-sm text-gray-600 mb-4 text-center">
            Have questions about your order, products, or collaborations?
            Drop us a message.
          </p>

          <form className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-black resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full mt-2 border border-black rounded-full py-2 text-sm tracking-wider hover:bg-black hover:text-white transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
