import React, { useEffect, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Use scrollY instead of pageYOffset since pageYOffset is deprecated
      setIsVisible(window.scrollY > 300); // Only show after scrolling 300px
    };

    // Initial check
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed z-50 left-6 bottom-6 w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 cursor-pointer transform translate-y-0"
          : "opacity-0 pointer-events-none transform translate-y-16"
      }`}
      onClick={scrollToTop}
      aria-label="Back to top">
      <IoChevronUpOutline className="text-2xl" />
    </button>
  );
};

export default BackToTopButton;
