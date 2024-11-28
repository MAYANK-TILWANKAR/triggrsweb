"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Industries = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header
    gsap.fromTo(
      headerRef.current,
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
          trigger: headerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate industry cards
    cardsRef.current.forEach((card, index) => {
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
    <>
      <section className="w-full lg:px-24 pt-20 bg-black">
        {/* Header section */}
        <div
          ref={headerRef}
          className="flex flex-col justify-start items-start lg:max-w-[1200px] mx-auto pt-6 md:pt-10 px-4 md:px-6 text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-semibold mb-3 md:mb-5 uppercase">
            Industries that we serve
          </h1>
          <p className="text-white text-sm md:text-base font-normal text-left max-w-3xl sm:block hidden">
            We achieved the business transformation objectives by utilising
            advanced technology to produce exceptional results.
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 py-6 md:py-10 w-full mx-auto bg-black lg:max-w-[1200px] gap-2 md:gap-0">
          {/* Add ref to each industry card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>

            {/* Icon container - adjust size */}
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 122.88 125.34"
                className="w-6 h-8">
                <path
                  fillRule="evenodd"
                  d="M25.06 20.02c9.91 5.72 11.43 13.86 12.67 24.13l25.93 14.97L69.92 0c18.09 10.45 20.32 3.52 21.07 23.46l.01.2 11.31 6.53-6.07 10.51-4.76-2.75.35 10.5 12.67 7.31-6.07 10.51-6.12-3.54.44 13.19 26.77 15.45c3.76 2.17 4.48 8.04 1.6 13.04-2.89 5-8.33 7.31-12.09 5.14L82.25 94.1l-11.77 6.28 6.19 3.57-6.07 10.51-12.73-7.35-9.27 4.95 4.82 2.79-6.07 10.5-11.37-6.56c-17.47 9.35-12.49 4.8-31.19-6l48.38-35.46L27.35 62.4C17.86 67.09 11.08 69.82 0 63.42l6.82-12.06c3.74-1.5 6.48-2.46 8.45-3.27.28-1.31.78-2.64 1.51-3.91.83-1.44 1.87-2.65 3.02-3.6-.24-2.24-.73-5.3-1.17-9.68z"
                  clipRule="evenodd"
                  className="fill-current"></path>
              </svg>
            </div>

            {/* Title section - adjust text size and spacing */}
            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Aerospace & Defence
              </span>
            </div>

            {/* Description - adjust text size */}
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the aerospace and defence
              industry, including working with government agencies and major
              defence contractors.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 122.88 35.03"
                className="w-12 h-8">
                <path
                  fillRule="evenodd"
                  d="M99.42 13.57c5.93 0 10.73 4.8 10.73 10.73s-4.8 10.73-10.73 10.73-10.73-4.8-10.73-10.73 4.8-10.73 10.73-10.73M79.05 5c-.59 1.27-1.06 2.69-1.42 4.23-.82 2.57.39 3.11 3.19 2.06 2.06-1.23 4.12-2.47 6.18-3.7 1.05-.74 1.55-1.47 1.38-2.19-.34-1.42-3.08-2.16-5.33-2.6-2.86-.57-2.66-.69-4 2.2M23.86 19.31a4.991 4.991 0 0 1 0 9.98 4.991 4.991 0 0 1 0-9.98m75.56 0a4.991 4.991 0 0 1 0 9.98 4.991 4.991 0 0 1 0-9.98M46.14 12.5c2.77-2.97 5.97-4.9 9.67-6.76 8.1-4.08 13.06-3.58 21.66-3.58l-2.89 7.5c-1.21 1.6-2.58 2.73-4.66 2.84zm-22.28 1.07c5.93 0 10.73 4.8 10.73 10.73s-4.8 10.73-10.73 10.73-10.73-4.8-10.73-10.73 4.8-10.73 10.73-10.73m16.96-3.27c3.52-2.19 7.35-4.15 11.59-5.82 12.91-5.09 22.78-6 36.32-1.9 4.08 1.55 8.16 3.1 12.24 4.06 4.03.96 21.48 1.88 21.91 4.81l-4.31 5.15c1.57 1.36 2.85 3.03 3.32 5.64-.13 1.61-.57 2.96-1.33 4.04-1.29 1.85-5.07 3.76-7.11 2.67-.65-.35-1.02-1.05-1.01-2.24.06-23.9-28.79-21.18-26.62 2.82H35.48C44.8 5.49 5.04 5.4 12.1 28.7 9.62 31.38 3.77 27.34 0 18.75a28 28 0 0 1 3.42-2.89c-.06-.05.06.19-.15-.17s.51-1.87 1.99-2.74c7.76-4.55 26.47-4.43 35.56-2.65"
                  clipRule="evenodd"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Travel & Hospitality
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the travel and hospitality
              industry, including working with major travel and hospitality
              companies.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="20"
                y="0"
                version="1.1"
                viewBox="10 0 88.47 122.8"
                className="w-12 h-8">
                <path
                  d="M11.86 68.08 7.62 92.09c-.07.33-.2.63-.4.86-1.51 1.95-2.46 3.62-2.74 4.97-.2 1 0 1.8.67 2.43l16.56 16.56a7.04 7.04 0 0 0 3.74 1.91c1.6.3 3.46.13 5.6-.45.03 0 .08-.02.12-.02.81-.22 1.88-.48 2.89-.73 4.44-1.08 8.31-2.03 11.91-5.29l4.62-4.82c.05-.08.12-.15.18-.22.07-.07.52-.52 1.13-1.1 3.16-3.09 7.07-6.9 4.69-10.24l-1.85-1.85c-.9.86-1.85 1.71-2.76 2.53-.83.73-1.61 1.41-2.33 2.13-.76.76-2 .76-2.76 0-.76-.77-.76-2 0-2.76.71-.72 1.6-1.5 2.51-2.31 3.13-2.76 6.72-5.92 4.79-8.68l-1.83-1.83c-.1-.1-.18-.22-.27-.33-1.05 1.08-2.21 2.11-3.34 3.11-.83.73-1.61 1.41-2.33 2.13-.77.77-2 .77-2.76 0-.77-.76-.77-2 0-2.76.71-.71 1.6-1.5 2.51-2.31 3.13-2.76 6.72-5.92 4.79-8.68l-1.83-1.83c-.13-.13-.23-.27-.32-.42l-5.37 5.37c-.77.76-2 .76-2.76 0-.76-.77-.76-2 0-2.76l10.07-10.07c2.41-2.41 2.96-4.92 2.33-6.82-.23-.7-.62-1.31-1.1-1.8a4.5 4.5 0 0 0-.84-.66h-.01c-.15.07-.26-.08-.4-.22-.17-.08-.36-.16-.54-.22-1.67-.55-3.84-.16-6.04 1.69-.03.03-.06.06-.09.08q-.36.3-.72.66l-20.9 20.93c-.76.76-2 .76-2.76 0-.7-.7-.76-1.78-.18-2.55zm13.22 2.03.67-.67 13.79-13.79c-1.43-.66-2.76-1.59-3.94-2.77a13.405 13.405 0 0 1 0-18.98 13.405 13.405 0 0 1 18.98 0 13.405 13.405 0 0 1 0 18.98l-.13.13c.1.09.21.19.31.29.43.43.8.9 1.13 1.4l17.1-17.1c-2.62-2.62-2.62-6.9 0-9.53L60.25 15.33c-2.62 2.62-6.9 2.62-9.53 0L15.28 50.77c2.62 2.62 2.62 6.9 0 9.53zm30.06-4.54c-.46.64-.99 1.28-1.62 1.9l-2 2-.02-.05c.15.08.28.18.42.32l1.91 1.91c.1.1.2.23.28.35 2.15 2.94 1.81 5.57.35 7.97.27.1.52.25.71.45l1.91 1.91c.1.1.2.23.28.35 2.31 3.18 1.73 5.95 0 8.48.08.05.15.12.23.2l1.91 1.91c.1.1.2.23.28.35 4.44 6.07-.85 11.22-5.1 15.38l-1.1 1.1-4.74 4.97-.15.15c-4.34 3.94-8.65 4.99-13.62 6.2-.83.2-1.68.42-2.84.71-.03 0-.05.02-.08.02-2.69.73-5.14.91-7.33.52-2.23-.4-4.16-1.4-5.77-2.98L2.52 103.15C.84 101.54.28 99.54.74 97.18c.37-1.9 1.46-3.99 3.19-6.25l4.42-25.04v-.1c.04-.31.1-.66.17-1.04L0 56.23 56.23 0l32.24 32.24z"
                  className="fill-current "></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Banking & Finance
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the banking and finance industry,
              including working with major banks and financial institutions.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 113.79 122.88"
                className="w-12 h-8">
                <path
                  fillRule="evenodd"
                  d="M75.64 27a35.4 35.4 0 0 1 8.58 7.07A32.5 32.5 0 0 1 90 43.34a37.5 37.5 0 0 1 1.85 5.93 35 35 0 0 1 .24 14 38.4 38.4 0 0 1-2.16 7.3l-.11.25c-2 5-5.58 9.84-9 14.62-1.74 2.42-3.47 4.81-4.92 7.13a4.71 4.71 0 0 1-4.33 2.18l-27.52 4.09a4.7 4.7 0 0 1-5.21-3.41 39 39 0 0 0-2.53-5.8 24.2 24.2 0 0 0-3-4.48C31.89 83.53 30.44 81.87 29 80a40.6 40.6 0 0 1-4.14-6.92 41.2 41.2 0 0 1-2.8-8 35.6 35.6 0 0 1-.95-8.42 35.8 35.8 0 0 1 1.17-8.73 41.7 41.7 0 0 1 3.41-8.82l.2-.36A35.1 35.1 0 0 1 33 30.09a33.5 33.5 0 0 1 9.43-5.81l.29-.11a35 35 0 0 1 8-2.13 37.6 37.6 0 0 1 8.75-.2 38.6 38.6 0 0 1 8.37 1.71 37.8 37.8 0 0 1 7.8 3.45m-3.88 87.35a17.36 17.36 0 0 1-6.26 6.28 16.36 16.36 0 0 1-7.19 2.19 14.86 14.86 0 0 1-7.39-1.44 15.1 15.1 0 0 1-4.38-3.26zm2.4-14.11v2.22a23.5 23.5 0 0 1 0 3.25l-.5 2.38-30.56 4.54-.53-1.22-1.19-4.88v-1.42l32.7-4.87Zm-18-96.51A3.84 3.84 0 0 1 60.07 0h.26a3.9 3.9 0 0 1 2.47 1.19 3.86 3.86 0 0 1 1.06 2.69 1.3 1.3 0 0 1 0 .2l-.21 8.19a2 2 0 0 1 0 .26 3.81 3.81 0 0 1-3.86 3.52h-.27a3.77 3.77 0 0 1-2.46-1.17 3.84 3.84 0 0 1-1.06-2.7 1.3 1.3 0 0 1 0-.2l.2-8.22ZM14 18.1a3.9 3.9 0 0 1-1.22-2.67 3.83 3.83 0 0 1 3.69-4 3.84 3.84 0 0 1 2.75 1l6.14 5.73a3.85 3.85 0 0 1 .21 5.42 3.9 3.9 0 0 1-2.68 1.22 3.82 3.82 0 0 1-2.74-1zM4 60.32a3.86 3.86 0 0 1-4-3.72 3.78 3.78 0 0 1 1-2.75 3.8 3.8 0 0 1 2.68-1.2l8.38-.28a3.83 3.83 0 0 1 4 3.71v.2a3.86 3.86 0 0 1-1 2.55A3.8 3.8 0 0 1 12.34 60h-.15l-8.28.28Zm105.6-11.89h.13a3.84 3.84 0 0 1 2.65.85 3.9 3.9 0 0 1 1.4 2.59s0 .1 0 .12a3.84 3.84 0 0 1-3.44 4L102 57a3.84 3.84 0 0 1-4.21-3.42 3.84 3.84 0 0 1 3.43-4.21c2.78-.3 5.58-.62 8.37-.89ZM93.08 15.05A3.81 3.81 0 0 1 98.39 14a3.78 3.78 0 0 1 1.61 2.44 3.88 3.88 0 0 1-.57 2.88l-4.67 7A3.84 3.84 0 0 1 88.4 22l4.68-7ZM61.26 54.91h5.89a1.54 1.54 0 0 1 1.54 1.54 1.56 1.56 0 0 1-.26.86l-14 23.93a1.53 1.53 0 0 1-2.11.52 1.55 1.55 0 0 1-.72-1.63l2.07-14.68-7 .12a1.53 1.53 0 0 1-1.56-1.51 1.5 1.5 0 0 1 .21-.81l13.79-23.92a1.55 1.55 0 0 1 2.11-.54 1.52 1.52 0 0 1 .78 1.54l-.7 14.58Z"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Energy & Utilities
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the energy and utilities industry,
              including working with major energy providers and utilities.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 91.89"
                className="w-12 h-8">
                <path
                  fillRule="evenodd"
                  d="M46.82 34.74c-13.7.1-20.43-.88-24.49 10.31a28.6 28.6 0 0 0-1.81 7.82C0 60.94 3.26 55.93 0 78.59h5.65c2.61-20.35 28.26-17.89 29.05 0h36.74a15.44 15.44 0 0 1 26.26-9.25 15.47 15.47 0 0 1 4.43 9.23h15.26a5.28 5.28 0 0 0 5.27-5.27v-12H46.82zM64.59 6h.67a6 6 0 0 1 6 6v4.2H58.57V12a6 6 0 0 1 6-6Zm-3.12 8.81h-1.23V14c0-1.7 0-3.15 1.39-4.64a5 5 0 0 1 1.41-1 11.55 11.55 0 0 0-1.57 6.52Zm4.85-11.59a1.4 1.4 0 0 1-2.79 0V1.4a1.4 1.4 0 1 1 2.79 0zM55.75 8a1.39 1.39 0 0 1-1.38 2.41l-1.58-.91a1.39 1.39 0 0 1 1.38-2.41zm19.73 2.34A1.39 1.39 0 1 1 74.1 8l1.57-1a1.39 1.39 0 1 1 1.39 2.41l-1.58.91ZM59.87 3.92a1.38 1.38 0 0 1-2.4 1.38l-.92-1.58A1.39 1.39 0 0 1 59 2.34l.91 1.58ZM72.38 5.3A1.38 1.38 0 1 1 70 3.92l.91-1.58a1.39 1.39 0 0 1 2.39 1.38zm-23.3 53.9h73.8V20.86a3.6 3.6 0 0 0-3.57-3.56H52.65a3.63 3.63 0 0 0-3.57 3.56zm33.83-34.81h6A2.06 2.06 0 0 1 91 26.44v6.83h6.83a2.05 2.05 0 0 1 2 2v6a2.05 2.05 0 0 1-2 2H91v6.66a2.07 2.07 0 0 1-2.06 2h-6a2.06 2.06 0 0 1-2-2v-6.52H74a2.06 2.06 0 0 1-2.06-2v-6a2.06 2.06 0 0 1 2.06-2h6.83v-6.97a2.05 2.05 0 0 1 2-2.05Zm3.88 44.25a11.63 11.63 0 1 1-11.62 11.62 11.63 11.63 0 0 1 11.62-11.62m0 7.15a4.47 4.47 0 1 1-4.47 4.47 4.47 4.47 0 0 1 4.47-4.47m-66.62-8.18A11.63 11.63 0 1 1 8.55 79.23a11.63 11.63 0 0 1 11.62-11.62m0 7.15a4.47 4.47 0 1 1-4.47 4.47 4.48 4.48 0 0 1 4.47-4.47m13.27-33.9 6.56-.11v12.12H27.85c.6-3.95 2.17-8.62 5.59-12Z"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Healthcare
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the healthcare industry, including
              working with major healthcare providers and pharmaceutical
              companies.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 103.05 122.88"
                className="w-12 h-8">
                <path
                  d="M28.39 28.72c.13.55-.22 1.09-.76 1.21-.55.12-1.09-.22-1.21-.76-.23-.99-.18-1.88.06-2.7.24-.8.66-1.51 1.19-2.16a1.014 1.014 0 0 1 1.56-.01c1.51 1.59 3.25 2.53 4.9 2.78.79.12 1.56.08 2.27-.12.7-.2 1.33-.55 1.88-1.05.9-.85 1.57-2.14 1.84-3.91.08-.55.6-.94 1.15-.85.21.03.39.12.53.25 1.44 1.19 2.85 1.81 4.23 1.87 1.39.06 2.81-.44 4.24-1.49.44-.32 1.05-.23 1.38.18 1.88 2.34 3.69 3.34 5.44 3.16 1.82-.19 3.7-1.63 5.64-4.15.22-.29.58-.43.92-.39 4.14.49 6.63-.72 7.8-2.49.65-.99.9-2.16.8-3.32-.1-1.17-.55-2.3-1.3-3.19-1.25-1.48-3.36-2.3-6.11-1.46-.39.12-.8-.01-1.06-.3-1.5-1.71-2.99-2.92-4.42-3.62-1.14-.57-2.23-.81-3.23-.72-.97.08-1.87.48-2.68 1.19-.71.62-1.35 1.49-1.9 2.6-.24.48-.8.69-1.28.49-.77-.31-1.53-.51-2.28-.61q-1.125-.15-2.25 0c-.48.06-.92-.21-1.08-.64-1.04-2.72-2.43-4.01-4.03-4.36-1.68-.37-3.72.21-5.91 1.22a1 1 0 0 1-1.21-.29c-1.67-1.76-3.65-2.72-5.56-2.98-1.41-.19-2.78-.01-3.96.5-1.16.5-2.14 1.32-2.8 2.42-.74 1.24-1.08 2.85-.8 4.78.08.55-.31 1.07-.86 1.15h-.03c-2.88.33-4.85 1.92-5.67 3.76-.31.7-.46 1.44-.42 2.15.03.69.24 1.35.63 1.94.93 1.4 2.94 2.38 6.2 2.24.56-.02 1.03.41 1.05.97.01.27-.09.53-.26.72-.66.75-1.22 1.52-1.66 2.31-.43.77-.74 1.57-.92 2.4a1.016 1.016 0 0 1-1.99-.41c.22-1.03.6-2.02 1.13-2.97.2-.36.41-.7.65-1.05-2.9-.29-4.83-1.5-5.9-3.09-.6-.9-.92-1.92-.97-2.97-.05-1.02.15-2.08.6-3.07.99-2.21 3.16-4.14 6.3-4.79-.11-1.99.33-3.71 1.17-5.11.88-1.47 2.19-2.57 3.73-3.24 1.52-.66 3.26-.89 5.03-.65 2.17.3 4.39 1.31 6.3 3.14 2.32-1 4.54-1.51 6.55-1.07 2.11.47 3.89 1.93 5.2 4.9.67-.04 1.34-.01 2 .08.64.09 1.28.23 1.91.43.58-.98 1.23-1.79 1.96-2.43 1.14-1 2.44-1.56 3.84-1.69 1.37-.12 2.82.19 4.3.92 1.52.75 3.08 1.96 4.62 3.64 3.35-.8 5.99.33 7.62 2.27 1.03 1.22 1.64 2.76 1.78 4.33.13 1.58-.22 3.21-1.13 4.6-1.49 2.27-4.45 3.86-9.15 3.45-2.17 2.69-4.39 4.24-6.68 4.48-2.26.24-4.47-.78-6.63-3.19-1.56.96-3.13 1.42-4.73 1.35-1.41-.06-2.81-.53-4.19-1.41-.45 1.47-1.19 2.64-2.11 3.5-.79.74-1.71 1.25-2.71 1.53-.99.28-2.04.34-3.12.17-1.76-.27-3.57-1.12-5.2-2.56-.08.17-.15.34-.2.51-.16.5-.19 1.06-.04 1.68M0 117.75h93.74v5.13H0zM46.86 45l-1.11 10.68h12L56.64 45zM15.31 31.27l-1.55 14.92h16.76l-1.55-14.92zm-1.84 17.76-.76 7.32h18.87l-.76-7.32zM12.42 59.2l-1.13 10.59-7.06-1.3v46.7h85.28V84.15l-29.79-5.47-1.01-13.69H44.79l-.68 10.82-10.68-1.96-1.56-14.65zm33.12-1.48L45 62.96h13.5l-.54-5.24zm10.67 33.03h14.25v17.12H56.21zm-18.29 0h14.25v17.12H37.92zm-18.29 0h14.25v17.12H19.63zm57.14-71.22c-.51-.22-.75-.82-.52-1.33.22-.51.82-.75 1.33-.52.37.16.68.37.99.59.55-1.32 1.33-2.41 2.24-3.24 1.13-1.02 2.47-1.64 3.87-1.8s2.86.13 4.22.93c1.21.71 2.34 1.82 3.27 3.36 4.32-.92 7.34.35 9.1 2.46 1.25 1.5 1.83 3.42 1.78 5.28-.05 1.89-.75 3.73-2.07 5.07-1.72 1.74-4.45 2.62-8.11 1.57-.88 1.68-2.18 2.96-3.66 3.76-.98.54-2.04.86-3.09.96-1.08.1-2.15-.04-3.15-.45-1.12-.45-2.14-1.23-2.94-2.36-1.59.58-3.14.95-4.65 1-1.5.05-2.95-.22-4.33-.89-1.66 2.52-3.61 4.04-5.87 4.51-2.04.42-4.27-.04-6.7-1.43v5.31c0 .56-.45 1.02-1.02 1.02h-7.73c-.56 0-1.02-.45-1.02-1.02v-9.34c-1-.09-1.98-.36-2.93-.78-1.25-.56-2.44-1.39-3.59-2.49a1.012 1.012 0 0 1 1.39-1.47c.98.94 1.99 1.65 3.02 2.11.98.44 1.98.65 3.01.64.06.02.09.02.13.02.56 0 1.02.45 1.02 1.02v9.3h5.7v-6.16c0-.2.06-.41.19-.59.32-.46.96-.56 1.41-.24 2.57 1.84 4.81 2.53 6.72 2.13 1.9-.39 3.57-1.88 5.04-4.4l.02-.03c.3-.47.93-.61 1.4-.31 1.27.81 2.64 1.12 4.08 1.08 1.49-.05 3.07-.47 4.7-1.14.48-.22 1.06-.04 1.32.43.61 1.11 1.45 1.83 2.39 2.21.7.28 1.45.38 2.21.31.78-.07 1.57-.32 2.31-.72 1.32-.72 2.46-1.94 3.13-3.57.19-.52.76-.79 1.29-.61 3.24 1.15 5.53.56 6.87-.8.95-.96 1.45-2.31 1.49-3.7.04-1.41-.39-2.84-1.31-3.94-1.39-1.67-3.95-2.61-7.76-1.63-.46.14-.96-.06-1.19-.5-.82-1.56-1.82-2.62-2.89-3.25-.96-.57-1.99-.78-2.97-.66-.98.11-1.93.56-2.74 1.28-.92.83-1.66 2.03-2.08 3.55-.01.05-.03.09-.05.14-.23.51-.82.74-1.33.52-.44-.19-.79-.45-1.14-.7-.29-.19-.56-.38-.8-.49"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                Manufacturing
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the manufacturing industry,
              including working with major manufacturers and suppliers.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[6] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 111.85"
                width="24"
                height="24"
                stroke="currentColor"
                fill="currentColor"
                className="w-6 h-8">
                <path
                  d="M66.41 90.42h21.91c1.76-1.75 3.69-3.57 5.65-5.42 4.11-3.89 8.4-7.95 12.81-13.03 5.04-5.81 5.58-7.82 7.11-13.51.29-1.07.61-2.27 1.03-3.76l2.62-9.21.03-.1c1.4-4.1 1.51-6.81.93-8.37-.18-.48-.41-.8-.68-.97-.21-.14-.49-.19-.78-.16-.68.07-1.45.5-2.15 1.27l-7.78 18.53c-.07.17-.17.33-.28.47-.46.83-1.08 1.64-1.88 2.41l-13.8 15.39c-.75.84-2.04.91-2.87.16-.84-.75-.91-2.04-.16-2.87l13.81-15.39c.06-.07.12-.14.19-.2 1.43-1.36 1.88-2.83 1.63-3.9-.08-.33-.22-.61-.42-.8a1.3 1.3 0 0 0-.75-.32c-1.23-.13-3.04.78-5.25 3.39-.06.07-.13.14-.2.21l-5.35 4.72-.03.03c-5.79 5.48-8.28 6.78-12.82 9.15-.95.5-1.99 1.04-3.28 1.74-.51.28-1.01.62-1.5.99-.52.4-1.02.81-1.49 1.21-2.4 2.02-3.66 3.66-4.38 5.47-.75 1.88-1.02 4.17-1.39 7.31-.15 1.27-.26 2.52-.35 3.77-.07.61-.1 1.21-.13 1.79m20.88-78.05.13 26.59c.01 1.39-.87 2.58-2.11 3.08v.01l-23.1 9.34c-.2.04-.4.05-.6.05-.45 0-.89-.09-1.3-.26l-22.75-8.7v-.01a3.45 3.45 0 0 1-2.09-3.18l.13-26.25c-.02-.28 0-.56.05-.84.01-.4.09-.8.25-1.17.36-.86 1.05-1.5 1.87-1.83L59.99.25a3.53 3.53 0 0 1 2.71.03L84.89 8.3c1.33.48 2.17 1.67 2.23 2.97.1.36.17.73.17 1.1M57.24 45.86l.17-23.16-17.79-7.69-.38 23.25zm26.25-30.85-19.88 7.7.16 23.13 19.85-7.41zM56.47 90.42H34.55c-1.76-1.75-3.69-3.57-5.65-5.42-4.11-3.89-8.4-7.95-12.81-13.03-5.04-5.81-5.58-7.82-7.11-13.51-.28-1.07-.6-2.26-1.02-3.76l-2.62-9.21-.03-.1c-1.4-4.1-1.51-6.81-.93-8.37.18-.48.41-.8.68-.97.21-.14.49-.19.78-.16.68.07 1.45.5 2.15 1.27l7.78 18.53c.07.17.17.33.28.47.46.83 1.08 1.64 1.88 2.41l13.8 15.39c.75.84 2.04.91 2.87.16.84-.75.91-2.04.16-2.87l-13.8-15.4c-.06-.07-.12-.14-.19-.2-1.43-1.36-1.88-2.83-1.63-3.9.08-.33.22-.61.42-.8.19-.17.44-.29.75-.32 1.23-.13 3.05.78 5.25 3.39.06.07.13.14.2.21l5.35 4.72.03.03c5.79 5.48 8.28 6.78 12.82 9.15.95.5 1.99 1.04 3.28 1.74.51.28 1.01.62 1.5.99.52.4.1.81.62 1.49 1.32 2.21.7.28 1.45.38 2.21.31.78-.07 1.57-.32 2.31-.72 1.32-.72 2.46-1.94 3.13-3.57.19-.52.76-.79 1.29-.61 3.24 1.15 5.53.56 6.87-.8.95-.96 1.45-2.31 1.49-3.7.04-1.41-.39-2.84-1.31-3.94-1.39-1.67-3.95-2.61-7.76-1.63-.46.14-.96-.06-1.19-.5-.82-1.56-1.82-2.62-2.89-3.25-.96-.57-1.99-.78-2.97-.66-.98.11-1.93.56-2.74 1.28-.92.83-1.66 2.03-2.08 3.55-.01.05-.03.09-.05.14-.23.51-.82.74-1.33.52-.44-.19-.79-.45-1.14-.7-.29-.19-.56-.38-.8-.49"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block  text-neutral-100">
                Logistics
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the logistics industry, including
              working with government agencies and major logistics companies.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[7] = el)}
            className="flex flex-col py-6 md:py-10 relative group/feature border-b sm:border-r border-neutral-800">
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none"></div>
            <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 122.88 111.85"
                width="24"
                height="24"
                stroke="currentColor"
                fill="currentColor"
                className="w-6 h-8">
                <path
                  d="M66.41 90.42h21.91c1.76-1.75 3.69-3.57 5.65-5.42 4.11-3.89 8.4-7.95 12.81-13.03 5.04-5.81 5.58-7.82 7.11-13.51.29-1.07.61-2.27 1.03-3.76l2.62-9.21.03-.1c1.4-4.1 1.51-6.81.93-8.37-.18-.48-.41-.8-.68-.97-.21-.14-.49-.19-.78-.16-.68.07-1.45.5-2.15 1.27l-7.78 18.53c-.07.17-.17.33-.28.47-.46.83-1.08 1.64-1.88 2.41l-13.8 15.39c-.75.84-2.04.91-2.87.16-.84-.75-.91-2.04-.16-2.87l13.81-15.39c.06-.07.12-.14.19-.2 1.43-1.36 1.88-2.83 1.63-3.9-.08-.33-.22-.61-.42-.8a1.3 1.3 0 0 0-.75-.32c-1.23-.13-3.04.78-5.25 3.39-.06.07-.13.14-.2.21l-5.35 4.72-.03.03c-5.79 5.48-8.28 6.78-12.82 9.15-.95.5-1.99 1.04-3.28 1.74-.51.28-1.01.62-1.5.99-.52.4-1.02.81-1.49 1.21-2.4 2.02-3.66 3.66-4.38 5.47-.75 1.88-1.02 4.17-1.39 7.31-.15 1.27-.26 2.52-.35 3.77-.07.61-.1 1.21-.13 1.79m20.88-78.05.13 26.59c.01 1.39-.87 2.58-2.11 3.08v.01l-23.1 9.34c-.2.04-.4.05-.6.05-.45 0-.89-.09-1.3-.26l-22.75-8.7v-.01a3.45 3.45 0 0 1-2.09-3.18l.13-26.25c-.02-.28 0-.56.05-.84.01-.4.09-.8.25-1.17.36-.86 1.05-1.5 1.87-1.83L59.99.25a3.53 3.53 0 0 1 2.71.03L84.89 8.3c1.33.48 2.17 1.67 2.23 2.97.1.36.17.73.17 1.1M57.24 45.86l.17-23.16-17.79-7.69-.38 23.25zm26.25-30.85-19.88 7.7.16 23.13 19.85-7.41zM56.47 90.42H34.55c-1.76-1.75-3.69-3.57-5.65-5.42-4.11-3.89-8.4-7.95-12.81-13.03-5.04-5.81-5.58-7.82-7.11-13.51-.28-1.07-.6-2.26-1.02-3.76l-2.62-9.21-.03-.1c-1.4-4.1-1.51-6.81-.93-8.37.18-.48.41-.8.68-.97.21-.14.49-.19.78-.16.68.07 1.45.5 2.15 1.27l7.78 18.53c.07.17.17.33.28.47.46.83 1.08 1.64 1.88 2.41l13.8 15.39c.75.84 2.04.91 2.87.16.84-.75.91-2.04.16-2.87l-13.8-15.4c-.06-.07-.12-.14-.19-.2-1.43-1.36-1.88-2.83-1.63-3.9.08-.33.22-.61.42-.8.19-.17.44-.29.75-.32 1.23-.13 3.05.78 5.25 3.39.06.07.13.14.2.21l5.35 4.72.03.03c5.79 5.48 8.28 6.78 12.82 9.15.95.5 1.99 1.04 3.28 1.74.51.28 1.01.62 1.5.99.52.4.1.81.62 1.49 1.32 2.21.7.28 1.45.38 2.21.31.78-.07 1.57-.32 2.31-.72 1.32-.72 2.46-1.94 3.13-3.57.19-.52.76-.79 1.29-.61 3.24 1.15 5.53.56 6.87-.8.95-.96 1.45-2.31 1.49-3.7.04-1.41-.39-2.84-1.31-3.94-1.39-1.67-3.95-2.61-7.76-1.63-.46.14-.96-.06-1.19-.5-.82-1.56-1.82-2.62-2.89-3.25-.96-.57-1.99-.78-2.97-.66-.98.11-1.93.56-2.74 1.28-.92.83-1.66 2.03-2.08 3.55-.01.05-.03.09-.05.14-.23.51-.82.74-1.33.52-.44-.19-.79-.45-1.14-.7-.29-.19-.56-.38-.8-.49"
                  className="fill-current"></path>
              </svg>
            </div>

            <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
              <div className="absolute left-0 inset-y-0 h-5 md:h-6 group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center"></div>
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block  text-neutral-100">
                Education & Non-Profit
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-300 max-w-xs relative z-10 px-6 md:px-10">
              We have extensive experience in the education and non-profit
              industry, including working with government agencies and major
              logistics companies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
