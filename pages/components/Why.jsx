"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Why = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      cardsRef.current[3],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[3],
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate cards
    cardsRef.current.slice(0, 3).forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Smaller stagger for more cards
        }
      );
    });
  }, []);

  return (
    <section className="bg-neutral-900 py-16 md:py-24 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:w-1/2 pt-4 sm:pt-6 lg:pt-20 mx-2 sm:mx-4 md:ml-10 mb-8 lg:mb-0">
            <h2
              ref={(el) => (cardsRef.current[3] = el)}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 uppercase">
              Why Triggrsweb?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-6 sm:mb-8 text-justify sm:text-left ">
              We believe in integrity, innovation, constant improvement,
              commitment to customers, teamwork and trust. We provide high-level
              planning and infrastructure consulting through technology
              partnerships. We work on developing your technology implementation
              and management plan.
            </p>
            <Link
              href="/about/About"
              className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group w-full sm:w-auto hover:border-black">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500  group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                More About Us
              </span>
              <span className="relative invisible">More About Us</span>
            </Link>
          </div>

          <div className="lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4 md:px-0">
            {/* Expert Team Card */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white/10 p-3 sm:p-4 md:p-5 border border-[#1E1656] rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <Image
                    src="/images/expert-team.svg"
                    alt="Expert Team"
                    width={400}
                    height={400}
                    className="w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] "
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">
                    Expert Team
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm text-center md:text-left">
                    Our expert team brings together diverse skills and deep
                    industry experience. We&apos;re committed to delivering
                    innovative solutions that exceed expectations and drive real
                    business value.
                  </p>
                </div>
              </div>
            </div>

            {/* Committed to Delivery Card */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-white/10 p-3 sm:p-4 md:p-5 border border-[#1E1656] rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <Image
                    src="/images/delivery.svg"
                    alt="Committed to Delivery"
                    width={200}
                    height={200}
                    className="w-[150px] h-[75px] sm:w-[200px] sm:h-[100px]  "
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">
                    Committed to Delivery
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm text-center md:text-left">
                    We take pride in our track record of consistent, timely
                    delivery. Our robust project management ensures your
                    solutions are implemented efficiently and effectively,
                    meeting all requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 24-hour Assistance Card */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="bg-white/10 p-3 sm:p-4 md:p-5 border border-[#1E1656] rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <Image
                    src="/images/time.svg"
                    alt="24/7 Support"
                    width={200}
                    height={200}
                    className="w-[150px] h-[75px] sm:w-[200px] sm:h-[100px]  "
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center md:text-left">
                    24-hour Assistance
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm text-center md:text-left">
                    Our dedicated support team is available 24/7 to address your
                    concerns and provide assistance. We ensure your systems run
                    smoothly with round-the-clock monitoring and rapid response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
