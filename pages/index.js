import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Technologies from "./components/Technologies";
import Testimonial from "./components/Testimonial";
import Marque from "./components/Marque";
import Industries from "./components/Industries";
import Home2 from "./components/Home2";
const index = () => {
  return (
    <>
      <Navbar />
      <Home2 />
      <Home />
      <Marque />
      <Why />
      <Industries />
      <Testimonial />
      <Technologies />

      <Footer />
    </>
  );
};

export default index;
