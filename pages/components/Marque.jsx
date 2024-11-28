import React from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <>
      <div className="bg-blue-300 py-2 sm:py-6 md:py-4">
        <div className="max-w-[1300px] mx-auto ">
          <Marquee speed={40}>
            {[
              "Creative People",
              "Good Reviews",
              "Awesome Design",
              "Fast Delivery",
              "24/7 Support",
              "Quality Work",
              "Timely Updates",
            ].map((word, index) => (
              <span
                key={index}
                className="text-lg sm:text-xl md:text-lg font-bold mx-10 text-gray-800">
                ✷ {word}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Marque;
