

// // src/App.jsx
// import { Routes, Route } from "react-router-dom";

// import Hero from "./components/Hero";
// import SideMenu from "./components/SideMenu";
// import Navbar from "./components/Navbar";
// import Products from "./components/Products";
// import LimitedCollection from "./components/LimitedCollection";
// import ProductStreamSection from "./components/ProductStreamSection";
// import BestSellers from "./components/BestSellers";
// import ShopTheLook from "./components/ShopTheLook";
// import OurCollection from "./components/OurCollection";
// import AboutFabnex from "./components/AboutFabnex";
// import Newsletter from "./components/Newsletter";
// import FAQSection from "./components/FAQSection";
// import Footer from "./components/Footer";

// import HotProducts from "./pages/HotProducts";
// import Stringers from "./pages/Stringers";
// import NewLaunch from "./pages/NewLaunch";
// import BestSellerPage from "./pages/BestSellers";
// import Drift from "./pages/Drift";
// import Oversize from "./pages/Oversize";
// import Polo from "./pages/Polo";
// import Hoodies from "./pages/Hoodies";
// import Bottom from "./pages/Bottom";
// import ShopAll from "./pages/ShopAll";
// import Contact from "./pages/Contact";
// import SearchPage from "./pages/Search";
// import ProductDetails from "./pages/ProductDetails";

// export default function App() {
//   return (
//     <Routes>

//       {/* HOME PAGE */}
//       <Route path="/" element={
//         <div className="w-full h-full">
//           <Hero />
//           <SideMenu />
//           <div className="relative z-30">
//             <Navbar />
//             <Products />
//             <LimitedCollection />
//             <ProductStreamSection />
//             <BestSellers />
//             <ShopTheLook />
//             <OurCollection />
//             <AboutFabnex />
//             <Newsletter />
//             <FAQSection />
//             <Footer />
//           </div>
//         </div>
//       }/>

//       {/* PRODUCT CATEGORY PAGES */}
//       <Route path="/hot-products" element={<HotProducts />} />
//       <Route path="/stringers" element={<Stringers />} />
//       <Route path="/new-launch" element={<NewLaunch />} />
//       <Route path="/best-sellers" element={<BestSellerPage />} />
//       <Route path="/drift" element={<Drift />} />
//       <Route path="/oversize" element={<Oversize />} />
//       <Route path="/polo" element={<Polo />} />
//       <Route path="/hoodies" element={<Hoodies />} />
//       <Route path="/bottom" element={<Bottom />} />
//       <Route path="/shop-all" element={<ShopAll />} />
//     <Route path="/search" element={<SearchPage />} />


//       {/* CONTACT PAGE */}
//       <Route path="/contact" element={<Contact />} />

//    {/* Product Data */}
//       <Route path="/product/:id" element={<ProductDetails />} />

//     </Routes>
//   );
// }




// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import SideMenu from "./components/SideMenu";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import LimitedCollection from "./components/LimitedCollection";
import ProductStreamSection from "./components/ProductStreamSection";
import BestSellers from "./components/BestSellers";
import ShopTheLook from "./components/ShopTheLook";
import OurCollection from "./components/OurCollection";
import AboutFabnex from "./components/AboutFabnex";
import Newsletter from "./components/Newsletter";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

import HotProducts from "./pages/HotProducts";
import Stringers from "./pages/Stringers";
import NewLaunch from "./pages/NewLaunch";
import BestSellerPage from "./pages/BestSellers";
import Drift from "./pages/Drift";
import Oversize from "./pages/Oversize";
import Polo from "./pages/Polo";
import Hoodies from "./pages/Hoodies";
import Bottom from "./pages/Bottom";
import ShopAll from "./pages/ShopAll";
import Contact from "./pages/Contact";
import SearchPage from "./pages/Search";
import Account from "./pages/Account";
import ProductDetails from "./pages/ProductDetails";

// 🚀 Add Login & Verify OTP pages
import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";

export default function App() {
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route path="/" element={
        <div className="w-full h-full">
          <Hero />
          <SideMenu />
          <div className="relative z-30">
            <Navbar />
            <Products />
            <LimitedCollection />
            <ProductStreamSection />
            <BestSellers />
            <ShopTheLook />
            <OurCollection />
            <AboutFabnex />
            <Newsletter />
            <FAQSection />
            <Footer />
          </div>
        </div>
      }/>

      {/* PRODUCT CATEGORY PAGES */}
      <Route path="/hot-products" element={<HotProducts />} />
      <Route path="/stringers" element={<Stringers />} />
      <Route path="/new-launch" element={<NewLaunch />} />
      <Route path="/best-sellers" element={<BestSellerPage />} />
      <Route path="/drift" element={<Drift />} />
      <Route path="/oversize" element={<Oversize />} />
      <Route path="/polo" element={<Polo />} />
      <Route path="/hoodies" element={<Hoodies />} />
      <Route path="/bottom" element={<Bottom />} />
      <Route path="/shop-all" element={<ShopAll />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/account" element={<Account />} />
      

      {/* CONTACT PAGE */}
      <Route path="/contact" element={<Contact />} />

      {/* PRODUCT DETAILS PAGE */}
      <Route path="/product/:slug" element={<ProductDetails />} />

      {/* 🆕 AUTH ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />

    </Routes>
  );
}
