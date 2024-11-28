"use client";
import WorldMap from "./ui/world-map";

import { FlipWords } from "./ui/flip-words";

export default function Home2() {
  const words = [
    "Launch SaaS platforms that redefine industries.",
    "Transform your vision into reality with MVP product development.",
    "Elevate your brand with cutting-edge e-commerce solutions.",
  ];

  return (
    <div className="pt-52 sm:pt-32 w-full bg-black overflow-hidden">
      <div className="mt-10 max-w-7xl mx-auto relative z-10 w-full mb-20">
        <h1 className="text-4xl md:text-4xl font-bold text-center bg-clip-text">
          <FlipWords
            words={words}
            duration={4000}
            className="font-semibold text-neutral-400 text-center leading-tight"
          />
        </h1>
      </div>

      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
