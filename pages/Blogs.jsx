import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";

const Blogs = () => {
  return (
    <div className="bg-gradient-to-b from-[#171717] to-[#1a1a1a]">
      <Navbar />
      <div className="pt-12">
        <BlogCard />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
