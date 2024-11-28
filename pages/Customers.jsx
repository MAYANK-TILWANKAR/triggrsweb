import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const Customers = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <section className="h-screen  py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto  ">
          <div className="text-left mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
            <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
              Our Customers
            </h4>
            {/* <p className="text-sm sm:text-base md:text-lg text-white">
              We are proud to have worked with some of the most amazing
              customers in the industry.
            </p> */}
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                spaceBetween: 15,
              },
              768: {
                spaceBetween: 20,
              },
            }}
            className="swiper-container mb-6 sm:mb-10 ">
            {[
              {
                src: "https://triggrsweb.com/images/clients/client-1.webp",
                alt: "Customer1",
                title: "Customer1",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-2.webp",
                alt: "Customer2",
                title: "Customer2",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-3.webp",
                alt: "Customer3",
                title: "Customer3",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-5.webp",
                alt: "Customer4",
                title: "Customer4",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-6.webp",
                alt: "Customer5",
                title: "Customer5",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-7.webp",
                alt: "Customer6",
                title: "Customer6",
              },
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content">
                  <div className="relative  h-full w-full ">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      className="  w-72  h-full object-cover rounded-full scale-90  border-[5px] border-neutral-400"
                      width={288}
                      height={288}
                      priority
                    />
                  </div>
                  {/* <div className="text-center mt-3 font-semibold text-gray-700 text-sm sm:text-base">
                    {slide.title}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 15,
              },
              768: {
                spaceBetween: 20,
              },
            }}
            className="swiper-container mb-6 sm:mb-10">
            {[
              {
                src: "https://triggrsweb.com/images/clients/client-1.webp",
                alt: "Customer1",
                title: "Customer1",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-2.webp",
                alt: "Customer2",
                title: "Customer2",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-3.webp",
                alt: "Customer3",
                title: "Customer3",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-5.webp",
                alt: "Customer4",
                title: "Customer4",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-6.webp",
                alt: "Customer5",
                title: "Customer5",
              },
              {
                src: "https://triggrsweb.com/images/clients/client-7.webp",
                alt: "Customer6",
                title: "Customer6",
              },
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content">
                  <div className="relative  h-full w-full">
                    <img
                      src={slide.src}
                      loading="lazy"
                      alt={slide.alt}
                      className="  w-72 h-full object-cover rounded-full scale-90  border-[5px] border-neutral-400"
                    />
                  </div>
                  {/* <div className="text-center mt-3 font-semibold text-gray-700 text-sm sm:text-base">
                    {slide.title}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Customers;
