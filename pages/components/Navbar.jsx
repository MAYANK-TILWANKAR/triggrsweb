import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isAtTop = currentScrollPos < 10;

      // Only update visibility if we've scrolled more than 5px to prevent tiny movements
      if (Math.abs(currentScrollPos - prevScrollPos) > 5) {
        setVisible(!isScrollingDown || isAtTop);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (showDropdown) {
      if (dropdownRef.current) {
        dropdownRef.current.style.display = "block";
        gsap.fromTo(
          dropdownRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else {
      if (dropdownRef.current) {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (dropdownRef.current) {
              dropdownRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [showDropdown]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        gsap.fromTo(
          mobileMenuRef.current,
          {
            opacity: 0,
            x: "-100%",
          },
          {
            opacity: 1,
            x: "0%",
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        document.body.style.overflow = "unset";
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          x: "-100%",
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const toggleMobileServices = () => {
    setShowMobileServices(!showMobileServices);
  };

  return (
    <nav
      className={`bg-[#F8F8FC]/15 backdrop-blur-sm fixed w-full lg:w-[75%] lg:left-1/2 lg:-translate-x-1/2 z-50 transition-all duration-500 ease-in-out lg:rounded-full shadow-lg lg:mt-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "lg:-translate-y-full lg:opacity-0"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center ">
            <Link href="/">
              <Image
                src="/images/footerlogo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-10 w-32"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-4 xl:space-x-6 mr-8 xl:mr-36">
              <Link
                href="/"
                className="text-gray-100 flex items-center text-[14px] xl:text-[14px] hover:text-blue-600 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
              <div
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="text-gray-100 flex items-center text-[14px] xl:text-[14px] whitespace-nowrap cursor-pointer hover:text-blue-600">
                  Our Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  style={{ display: "none" }}
                  className="absolute  left-[100%] transform -translate-x-1/2 mt-6 bg-neutral-800 backdrop-blur-sm rounded-xl shadow-lg z-50 w-[90vw] sm:w-[85vw] lg:w-[80vw] max-w-4xl">
                  <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Link
                        href="/services/web"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/web.svg"
                          alt="Web Design & Development"
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
                          width={100}
                          height={100}
                        />
                        <div>
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            Web Design & Development
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom web solutions
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/services/ecommerce"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/ecommerce.svg"
                          alt="Ecommerce Development"
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
                          width={100}
                          height={100}
                        />
                        <div className="mt-5">
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            Ecommerce Development
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom online stores & marketplaces
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/services/api"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/api.svg"
                          alt="API Development"
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
                          width={100}
                          height={100}
                        />
                        <div className="mb-1">
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            API Development
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom API solutions
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/services/technology"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/technology.svg"
                          alt="Technology Integration"
                          className="w-6 h-6 sm:w-6 sm:h-8 mr-3 mb-5"
                          width={100}
                          height={100}
                        />
                        <div>
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            Technology Integration
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom technology integrations
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/services/backend"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/backend.svg"
                          alt="Backend Development"
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-3 mb-5"
                          width={100}
                          height={100}
                        />
                        <div className="mb-6">
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            Backend Development
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom backend solutions
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/services/dashboard"
                        className="flex items-center p-3 hover:bg-gray-50/10 rounded-lg transition-colors group">
                        <Image
                          src="/images/dashboard.svg"
                          alt="Dashboard & Portal Development"
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-3 mb-8"
                          width={100}
                          height={100}
                        />
                        <div className="">
                          <span className="block text-white text-sm sm:text-sm font-medium">
                            Dashboard Development
                          </span>
                          <span className="text-xs sm:text-sm text-neutral-400">
                            Custom dashboard & portal solutions
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links with responsive text sizes */}

              <Link
                href="/about/About"
                className="text-gray-100 flex items-center text-[14px] xl:text-[14px] hover:text-blue-600 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                About Us
              </Link>
              {/* <Link
                href="/career/Careers"
                className="text-gray-100 flex items-center text-[14px] xl:text-[14px] hover:text-blue-600 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                Careers
              </Link> */}
              <Link
                href="/insights/Blogs"
                className="text-gray-100 flex items-center text-[14px] xl:text-[14px] hover:text-blue-600 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                Insights
              </Link>
              <Link
                href="/customer/Customers"
                className="text-gray-100 flex items-center text-[14px] xl:text-[14px] hover:text-blue-600 relative after:absolute after:bottom-[-15px] after:left-0 after:h-[4px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                Customers
              </Link>
            </div>
            <div className="hidden lg:flex items-center ">
              <Link
                href="/contact/Contact"
                className="bg-blue-600 text-white text-[14px] xl:text-[14px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed w-[300px] left-0 top-[64px] bg-neutral-800 z-50 overflow-y-auto h-[calc(100vh-64px)]"
          style={{ opacity: 0, transform: "translateX(-100%)" }}>
          <div className="px-4 pt-2 pb-3 space-y-2">
            {/* Services Dropdown in Mobile */}
            <div className="relative">
              <button
                onClick={toggleMobileServices}
                className="w-full flex justify-between items-center py-2 text-gray-100 hover:text-blue-600">
                Our Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    showMobileServices ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-2 transition-all duration-300 ${
                  showMobileServices ? "block" : "hidden"
                }`}>
                <Link
                  href="/web"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  Web Development
                </Link>
                <Link
                  href="/ecommerce"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  Ecommerce Development
                </Link>
                <Link
                  href="/cloud"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  API Development
                </Link>
                <Link
                  href="/ai"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  Technology Integration
                </Link>
                <Link
                  href="/devops"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  Backend Development
                </Link>
                <Link
                  href="/dashboard"
                  className="block py-2 text-gray-100 hover:text-blue-600">
                  Dashboard & Portal Development
                </Link>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/customer"
              className="block py-2 text-gray-100 hover:text-blue-600">
              Customers
            </Link>
            <Link
              href="/About"
              className="block py-2 text-gray-100 hover:text-blue-600">
              About Us
            </Link>
            <Link
              href="/Careers"
              className="block py-2 text-gray-100 hover:text-blue-600">
              Careers
            </Link>
            <Link
              href="/Blogs"
              className="block py-2 text-gray-100 hover:text-blue-600">
              Insights
            </Link>
            <Link
              href="/customer"
              className="block py-2 text-gray-100 hover:text-blue-600">
              Customers
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact/Contact"
                className="block w-full text-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
