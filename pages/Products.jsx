import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Navbar />
      <div className="h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coming Soon!!
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We are working hard to bring you amazing products. Stay tuned for
            exciting launches coming soon!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
