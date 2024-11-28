"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Technologies = () => {
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

    // Animate cards
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
          delay: index * 0.1, // Reduced delay for smoother animation
        }
      );
    });
  }, []);

  const features = [
    {
      title: "Next.js",
      description:
        "A powerful React framework that enables server-side rendering and static site generation for optimal performance and SEO.",
      image: "/images/tech-1.png",
    },
    {
      title: "React.js",
      description:
        "A JavaScript library for building dynamic user interfaces with reusable components and efficient state management.",
      image: "/images/tech-2.png",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that allows rapid UI development with pre-built classes and responsive design.",
      image: "/images/tech-3.png",
    },
    {
      title: "Cloudflare",
      description:
        "A global CDN and security platform providing DDoS protection, SSL encryption, and edge computing capabilities.",
      image: "/images/tech-4.png",
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime environment that enables server-side development with high performance and scalability.",
      image: "/images/tech-8.png",
    },
    {
      title: "Flutter",
      description:
        "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      image: "/images/tech-5.png",
    },
    {
      title: "MongoDB",
      description:
        "A NoSQL database that provides high scalability, flexibility and performance for modern applications.",
      image: "/images/tech-9.png",
    },
    {
      title: "Amazon Web Services",
      description:
        "A comprehensive cloud platform offering compute, storage, database, ML, analytics and other services.",
      image: "/images/tech-6.png",
    },
    {
      title: "Microsoft Azure",
      description:
        "Enterprise-grade cloud computing platform with integrated services for modern cloud applications.",
      image: "/images/tech-7.png",
    },
  ];

  return (
    <section className="bg-neutral-900 py-16 md:py-24 lg:py-32 lg:px-24">
      <div className="max-w-7xl mx-auto ">
        <div ref={headerRef} className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-4 uppercase">
            Our Technology Stack
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We leverage cutting-edge technologies to build robust and scalable
            solutions for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              key={feature.title}
              className="bg-neutral-800 rounded-xl p-6 border border-neutral-600   hover:border-neutral-200 transition-colors ">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} icon`}
                    priority
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
