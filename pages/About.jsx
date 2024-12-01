import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
const About = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    // Set initial size
    const updateSize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    updateSize();

    // Create grid of points
    const geometry = new THREE.BufferGeometry();
    const points = [];

    // Adjust number of points based on screen size
    const pointCount = window.innerWidth < 768 ? 500 : 1000;

    for (let i = 0; i < pointCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(100);
      const y = THREE.MathUtils.randFloatSpread(100);
      const z = THREE.MathUtils.randFloatSpread(100);
      points.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );

    const material = new THREE.PointsMaterial({
      color: "blue",
      size: window.innerWidth < 768 ? 0.3 : 0.2,
      transparent: true,
      opacity: 0.6,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    camera.position.z = window.innerWidth < 768 ? 30 : 50;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      pointCloud.rotation.x += window.innerWidth < 768 ? 0.002 : 0.001;
      pointCloud.rotation.y += window.innerWidth < 768 ? 0.002 : 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      updateSize();
      camera.position.z = window.innerWidth < 768 ? 30 : 50;
      material.size = window.innerWidth < 768 ? 0.3 : 0.2;
      pointCloud.rotation.x = window.innerWidth < 768 ? 0.002 : 0.001;
      pointCloud.rotation.y = window.innerWidth < 768 ? 0.002 : 0.001;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Cleanup
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Head>
        <title>About TriggrsWeb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-[#171717] min-h-screen">
        <Navbar />
        <section className="relative h-[50vh] md:h-[80vh] bg-[#171717] flex items-center overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 bg-black touch-none"
          />
          <div className="relative z-20 text-left px-4 md:px-6 max-w-7xl mx-auto w-full mt-16 md:mt-20">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="text-blue-600">TriggrsWeb</span>
            </h1>
            <p className="text-base sm:text-lg md:text-base text-white/90 max-w-2xl">
              Crafting digital excellence through innovation and dedication
            </p>
          </div>
        </section>

        {/* New About Company Section */}
        <section className="bg-[#171717] py-12 md:py-44">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 lg:gap-20">
              <div className="w-full sm:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4"></div>
                  <div className="relative">
                    <Image
                      src="https://i.imgur.com/WbQnbas.png"
                      alt="About TriggrsWeb"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    About{" "}
                    <span className="text-blue-600">TriggrsWeb Solutions</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    TriggrsWeb is a forward-thinking web development company
                    specializing in creating cutting-edge websites and web
                    applications. Our team of passionate developers combines
                    technical expertise with creative innovation to deliver
                    digital solutions that drive business success.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    We take pride in transforming complex challenges into
                    elegant, user-friendly solutions that help businesses thrive
                    in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <section className="relative block px-4 md:px-6 bg-[#171717] min-h-screen -mt-10 ">
            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-white my-2 md:my-3 flex items-center justify-center font-medium uppercase tracking-wider text-sm md:text-base">
                Why choose us
              </span>
              <h2 className="block w-full text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 mb-4">
                Transform Your Digital Presence with TriggrsWeb
              </h2>
              <p className="mx-auto my-3 md:my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-white text-sm md:text-base px-2">
                We deliver cutting-edge web solutions that help businesses stand
                out in the digital landscape. Our expertise ensures your success
                in the online world.
              </p>
            </div>

            <div className="relative mx-auto max-w-6xl z-10 grid grid-cols-1 gap-6 md:gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
              <div className="rounded-3xl border border-white p-4 md:p-8 text-center shadow">
                <div className="mx-auto flex h-10 w-10 md:h-16 md:w-16 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="Layer_1"
                    x="0"
                    y="0"
                    version="1.1"
                    viewBox="0 0 122.88 111.81"
                    fill="white"
                    className="w-5 h-5 md:w-16 md:h-16">
                    <path
                      fillRule="evenodd"
                      d="m49.82 88.5 6.43 18.9 3.23-11.22-1.58-1.74c-.71-1.04-.87-1.95-.48-2.74.86-1.7 2.63-1.38 4.29-1.38 1.74 0 3.89-.33 4.43 1.85.19.73-.04 1.49-.55 2.27L64 96.18l3.23 11.22 5.82-18.9c4.2 3.78 16.62 4.53 21.25 7.11 1.46.82 2.78 1.85 3.85 3.25 2.88 3.81 3.09 4.06 3.83 8.79-.24 2.49-1.65 3.93-4.44 4.15h-72.2c-2.79-.21-4.2-1.65-4.44-4.15.74-4.73.96-4.98 3.83-8.79 1.06-1.41 2.38-2.44 3.85-3.25 4.62-2.58 17.05-3.34 21.24-7.11m-21.84-1.25c-.08-.16-.17-.3-.27-.44-.45-.74-.9-1.47-1.36-2.31-.45-.91-.9-1.76-1.31-2.55-.4-.85-.79-1.76-1.13-2.66-.28-.79-.62-1.69-.96-2.77-.5-1.53-1.93-2.48-3.45-2.48H9.72c-.34 0-.67-.05-.91-.17-.22-.12-.5-.28-.67-.5-.22-.23-.4-.45-.5-.67-.12-.22-.17-.57-.17-.9V59.45c0-.34.05-.62.12-.85.12-.23.28-.5.57-.79.22-.22.45-.4.67-.45.23-.12.57-.17.9-.17h8.99c1.81 0 3.28-1.31 3.62-3 .22-.96.45-1.86.67-2.66.28-.91.57-1.76.91-2.66.34-.85.67-1.76 1.13-2.6.4-.91.85-1.69 1.24-2.48.79-1.47.5-3.17-.62-4.29l-7.01-7.07c-.05-.05-.05-.05-.12-.05-.22-.22-.4-.45-.5-.67-.12-.22-.12-.45-.12-.79s.05-.62.17-.85c.12-.28.28-.5.57-.79l8.65-8.6c.28-.28.5-.45.79-.57.23-.12.5-.17.85-.17.34 0 .62.05.85.17s.5.28.74.5h.05L36.98 27c1.24 1.24 3.22 1.41 4.64.4.74-.45 1.47-.9 2.31-1.36.9-.45 1.76-.9 2.55-1.31.85-.4 1.76-.79 2.66-1.13.79-.28 1.69-.62 2.77-.96 1.53-.5 2.48-1.93 2.48-3.45v-9.8c0-.34.05-.67.17-.91.12-.22.28-.45.45-.67.23-.22.45-.4.67-.45.22-.12.57-.17.91-.17h9.68c.34 0 .67.05.91.17.22.05.45.23.67.45.17.22.34.45.45.67.12.22.17.57.17.91v9.79c0 1.53.96 2.94 2.48 3.45 1.07.34 1.98.67 2.77.96.91.34 1.81.74 2.66 1.13.79.4 1.64.85 2.55 1.31.85.45 1.58.9 2.31 1.36 1.41 1.02 3.39.85 4.64-.4l6.39-6.39h.05c.22-.22.5-.4.74-.5.22-.12.5-.17.85-.17.34 0 .62.05.85.17.29.12.5.28.79.57l8.65 8.6c.28.28.45.5.57.79.12.22.17.5.17.85 0 .34 0 .57-.12.79-.12.23-.28.45-.5.67-.05 0-.05 0-.12.05l-7.01 7.07a3.58 3.58 0 0 0-.62 4.29c.4.79.85 1.58 1.24 2.48.45.85.79 1.76 1.13 2.6.34.9.62 1.76.91 2.66.22.79.45 1.69.67 2.66.34 1.69 1.81 3 3.62 3h8.98c.34 0 .67.05.91.17.22.05.45.22.67.45.29.29.45.57.57.79.05.22.12.5.12.85v12.33c0 .34-.05.67-.17.91-.12.23-.29.45-.5.67-.17.22-.45.4-.67.5-.23.12-.57.17-.9.17h-9.79c-1.53 0-2.94.96-3.45 2.48-.34 1.07-.67 1.98-.96 2.77-.34.91-.74 1.81-1.13 2.66-.85 1.67-1.67 3.27-2.66 4.86-.1.14-.19.28-.27.44h8.56c.36-.72.72-1.5 1.1-2.3.45-1.02.9-2.03 1.31-3.05.05-.17.17-.4.23-.57h7.24c1.3 0 2.55-.22 3.67-.67 1.13-.45 2.21-1.19 3.12-2.09s1.64-1.93 2.09-3.12.67-2.38.67-3.67V59.44c0-1.24-.28-2.48-.74-3.62a9 9 0 0 0-2.03-3.05l-.05-.05c-.91-.91-1.93-1.64-3.05-2.1-1.13-.5-2.38-.74-3.67-.74h-6.17c0-.17-.05-.28-.12-.45-.34-1.07-.67-2.15-1.07-3.17-.45-1.07-.85-2.1-1.3-3.05-.05-.12-.17-.28-.22-.45l5.1-5.15c.96-.85 1.64-1.86 2.14-3 .45-1.13.74-2.38.74-3.67 0-1.31-.22-2.48-.74-3.67a10 10 0 0 0-2.09-3.05h-.05l-8.65-8.6c-.9-.9-1.93-1.58-3.12-2.09-1.19-.5-2.38-.74-3.67-.74-1.24 0-2.48.22-3.67.74-1.19.45-2.21 1.19-3.12 2.09l-4.41 4.36-.34-.17c-.91-.5-1.93-.96-3-1.47-1.02-.45-2.03-.9-3.05-1.31-.17-.05-.4-.17-.57-.23V9.55c0-1.31-.22-2.55-.67-3.67-.45-1.14-1.19-2.21-2.09-3.12-.96-.91-1.98-1.64-3.12-2.09C68.9.22 67.71 0 66.4 0h-9.92c-1.31 0-2.48.22-3.67.67-1.12.45-2.15 1.19-3.12 2.09-.91.91-1.64 1.98-2.09 3.12-.45 1.12-.67 2.38-.67 3.67v7.24c-.17.05-.4.17-.57.23-1.02.4-2.03.85-3.05 1.31-1.07.5-2.09.96-3 1.47l-.34.17-4.41-4.36c-.9-.9-1.93-1.64-3.12-2.09-1.19-.5-2.43-.74-3.67-.74-1.31 0-2.48.22-3.67.74-1.19.5-2.21 1.19-3.12 2.09l-8.65 8.6h-.05c-.9.9-1.58 1.93-2.09 3.05-.5 1.18-.74 2.37-.74 3.66 0 1.31.28 2.55.74 3.67.5 1.13 1.19 2.15 2.15 3l5.09 5.15c-.05.17-.17.34-.22.45-.45.96-.85 1.98-1.31 3.05-.4 1.02-.74 2.09-1.07 3.17-.05.17-.12.28-.12.45H9.56c-1.31 0-2.55.23-3.67.74-1.13.45-2.15 1.19-3.05 2.09l-.05.05c-.91.9-1.58 1.93-2.03 3.05C.28 56.94 0 58.2 0 59.44v12.32c0 1.31.22 2.48.67 3.67s1.19 2.21 2.09 3.12 1.98 1.64 3.12 2.09c1.13.45 2.38.67 3.67.67h7.24c.05.17.17.4.23.57.4 1.02.85 2.03 1.31 3.05.39.81.74 1.59 1.1 2.3h8.55zm18.93-25.79c-.8.03-1.4.2-1.81.47-.24.16-.41.36-.52.6-.13.26-.18.59-.17.96.03 1.1.61 2.52 1.71 4.16l.01.03 3.59 5.71c1.44 2.29 2.95 4.63 4.82 6.34 1.8 1.65 3.99 2.76 6.89 2.77 3.13.01 5.43-1.15 7.28-2.9 1.93-1.81 3.46-4.29 4.97-6.78l4.04-6.66c.75-1.72 1.03-2.87.86-3.55-.11-.4-.55-.6-1.3-.63-.16-.01-.32-.01-.49-.01l-.57.03c-.11.01-.21 0-.31-.02-.36.02-.73-.01-1.11-.06l1.38-6.13c-7.39-.09-12.46-1.38-18.44-5.21-1.97-1.25-2.56-2.69-4.53-2.55-1.48.28-2.73.95-3.73 2.02-.95 1.02-1.67 2.42-2.14 4.21l.79 7.22c-.42.05-.83.03-1.22-.02m31.77-1.29c1 .3 1.64.94 1.89 1.96.29 1.14-.03 2.73-.98 4.9l-.06.12-4.09 6.74c-1.58 2.6-3.18 5.2-5.32 7.2-2.21 2.07-4.94 3.45-8.67 3.44-3.48-.01-6.1-1.34-8.25-3.31-2.08-1.9-3.67-4.35-5.18-6.76l-3.59-5.71c-1.31-1.96-1.99-3.75-2.04-5.22-.02-.69.1-1.32.35-1.87.27-.58.68-1.06 1.23-1.43.26-.17.55-.32.87-.44-.23-3.09-.32-7-.17-10.27.08-.77.22-1.55.44-2.33.92-3.28 3.22-5.92 6.07-7.73 1-.64 2.1-1.17 3.27-1.59 6.89-2.51 16.04-1.14 20.94 4.15 1.99 2.16 3.25 5.02 3.52 8.8z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mt-4 md:mt-6 text-white text-lg md:text-xl">
                  Expert Development
                </h3>
                <p className="my-3 md:my-4 mb-0 font-normal leading-relaxed tracking-wide text-neutral-300 text-sm md:text-base">
                  Our skilled team of developers creates robust, scalable
                  solutions using the latest technologies and best practices in
                  web development.
                </p>
              </div>

              <div className="rounded-3xl border border-white p-4 md:p-8 text-center shadow">
                <div className="mx-auto flex h-10 w-10 md:h-12 md:w-12 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="Layer_1"
                    x="0"
                    y="0"
                    version="1.1"
                    viewBox="0 0 122.88 118.29"
                    fill="white"
                    className="w-5 h-5 md:w-16 md:h-16">
                    <path d="M45.34 6.14a4 4 0 0 0 3.23 7.24 68 68 0 0 1 7.19-3.1c4.54-1.51 3-8.5-2-7.67a44.8 44.8 0 0 0-8.4 3.53Zm7.34 52.75v-6.21L62 43.16a19 19 0 0 0 1.49-1.65 7.7 7.7 0 0 0 1-1.49 3.46 3.46 0 0 0 .34-1.5 2.67 2.67 0 0 0-.32-1.39 1.8 1.8 0 0 0-1-.78 5.1 5.1 0 0 0-1.71-.24h-8.64V29.9c1.32-.3 2.79-.57 4.42-.83a37.5 37.5 0 0 1 5.66-.38 13.1 13.1 0 0 1 5.58 1 5.76 5.76 0 0 1 2.91 2.86 11.1 11.1 0 0 1 .86 4.63 11.5 11.5 0 0 1-.52 3.59 11.3 11.3 0 0 1-1.51 3 21.5 21.5 0 0 1-2.4 2.82L63 51.87h10.4v7Zm36 0v-5.53H76.24l-1.37-3.43 8.67-21h8l-7.35 17.82h4.51v-4.44l1.49-3.87h6.33v8.31h2.42v5.4l-2.42 1.21v5.53Zm-58.77-4.32a90.2 90.2 0 0 0 13.32 18.67 76 76 0 0 0 21.12 15.58 2.13 2.13 0 0 0 1.82.09 7.8 7.8 0 0 0 2.54-1.85A28 28 0 0 0 71 84.22c3.39-4.46 7.59-10 13.52-7.23l.36.19 19.77 11.37.2.13a8.94 8.94 0 0 1 3.71 7.7 20.84 20.84 0 0 1-2.89 9.8 20.15 20.15 0 0 1-9.52 8.41 43.5 43.5 0 0 1-11.73 3.19 39.7 39.7 0 0 1-17.92-1.5 79 79 0 0 1-18-8.7l-.45-.29c-2.94-1.82-6.1-3.78-9.19-6.09-11.38-8.57-22.94-21-30.47-34.57C2.08 55.19-1.37 42.84.52 31.08c1-6.45 3.81-12.32 8.63-16.2 4.2-3.39 9.87-5.24 17.21-4.59a2.46 2.46 0 0 1 2 1.27L41 33a6.7 6.7 0 0 1 1.07 7.17 14.1 14.1 0 0 1-4.85 5.44c-.69.59-1.5 1.17-2.35 1.79-2.83 2.05-6.06 4.43-4.95 7.24v-.07Zm78.77 21.65a4 4 0 0 0 6.32 4.72 4.5 4.5 0 0 0 .52-.7 45.3 45.3 0 0 0 3.56-7.95 4 4 0 0 0-7.1-3.46 4.3 4.3 0 0 0-.4.84 38.3 38.3 0 0 1-2.91 6.55Zm6.15-21.07a4 4 0 0 0 7.77 1.49 4.2 4.2 0 0 0 .15-.79 50.6 50.6 0 0 0-.12-8.7 4 4 0 0 0-7.81-.58 4.4 4.4 0 0 0-.1 1.41 41 41 0 0 1 .11 7.17m-3.92-21.22a4 4 0 0 0 7.24-3.28 51 51 0 0 0-4.21-7.51 4 4 0 1 0-6.58 4.46 43.6 43.6 0 0 1 3.55 6.33M97.36 17.07c4.17 3.05 9-3 4.78-6.35a54 54 0 0 0-7.27-4.59c-4.08-2.13-8.05 3.44-4.38 6.58a4 4 0 0 0 .71.47 45.3 45.3 0 0 1 6.16 3.89m-20-8.52A4 4 0 0 0 79.7 1a4 4 0 0 0-1-.31A57 57 0 0 0 70.11 0a4 4 0 1 0 0 8 49 49 0 0 1 7.27.6Z"></path>
                  </svg>
                </div>
                <h3 className="mt-4 md:mt-6 text-white text-lg md:text-xl">
                  Optimized Performance
                </h3>
                <p className="my-3 md:my-4 mb-0 font-normal leading-relaxed tracking-wide text-white text-sm md:text-base">
                  We optimize every aspect of your website for maximum speed and
                  efficiency, ensuring an exceptional user experience for your
                  visitors.
                </p>
              </div>

              <div className="rounded-3xl border border-white p-4 md:p-8 text-center shadow">
                <div className="mx-auto flex h-10 w-10 md:h-12 md:w-12 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 122.88 118.21"
                    fill="white"
                    className="w-5 h-5 md:w-16 md:h-16">
                    <path d="M45.34 6.14a4 4 0 0 0 3.23 7.24 68 68 0 0 1 7.19-3.1c4.54-1.51 3-8.5-2-7.67a44.8 44.8 0 0 0-8.4 3.53Zm7.34 52.75v-6.21L62 43.16a19 19 0 0 0 1.49-1.65 7.7 7.7 0 0 0 1-1.49 3.46 3.46 0 0 0 .34-1.5 2.67 2.67 0 0 0-.32-1.39 1.8 1.8 0 0 0-1-.78 5.1 5.1 0 0 0-1.71-.24h-8.64V29.9c1.32-.3 2.79-.57 4.42-.83a37.5 37.5 0 0 1 5.66-.38 13.1 13.1 0 0 1 5.58 1 5.76 5.76 0 0 1 2.91 2.86 11.1 11.1 0 0 1 .86 4.63 11.5 11.5 0 0 1-.52 3.59 11.3 11.3 0 0 1-1.51 3 21.5 21.5 0 0 1-2.4 2.82L63 51.87h10.4v7Zm36 0v-5.53H76.24l-1.37-3.43 8.67-21h8l-7.35 17.82h4.51v-4.44l1.49-3.87h6.33v8.31h2.42v5.4l-2.42 1.21v5.53Zm-58.77-4.32a90.2 90.2 0 0 0 13.32 18.67 76 76 0 0 0 21.12 15.58 2.13 2.13 0 0 0 1.82.09 7.8 7.8 0 0 0 2.54-1.85A28 28 0 0 0 71 84.22c3.39-4.46 7.59-10 13.52-7.23l.36.19 19.77 11.37.2.13a8.94 8.94 0 0 1 3.71 7.7 20.84 20.84 0 0 1-2.89 9.8 20.15 20.15 0 0 1-9.52 8.41 43.5 43.5 0 0 1-11.73 3.19 39.7 39.7 0 0 1-17.92-1.5 79 79 0 0 1-18-8.7l-.45-.29c-2.94-1.82-6.1-3.78-9.19-6.09-11.38-8.57-22.94-21-30.47-34.57C2.08 55.19-1.37 42.84.52 31.08c1-6.45 3.81-12.32 8.63-16.2 4.2-3.39 9.87-5.24 17.21-4.59a2.46 2.46 0 0 1 2 1.27L41 33a6.7 6.7 0 0 1 1.07 7.17 14.1 14.1 0 0 1-4.85 5.44c-.69.59-1.5 1.17-2.35 1.79-2.83 2.05-6.06 4.43-4.95 7.24v-.07Zm78.77 21.65a4 4 0 0 0 6.32 4.72 4.5 4.5 0 0 0 .52-.7 45.3 45.3 0 0 0 3.56-7.95 4 4 0 0 0-7.1-3.46 4.3 4.3 0 0 0-.4.84 38.3 38.3 0 0 1-2.91 6.55Zm6.15-21.07a4 4 0 0 0 7.77 1.49 4.2 4.2 0 0 0 .15-.79 50.6 50.6 0 0 0-.12-8.7 4 4 0 0 0-7.81-.58 4.4 4.4 0 0 0-.1 1.41 41 41 0 0 1 .11 7.17m-3.92-21.22a4 4 0 0 0 7.24-3.28 51 51 0 0 0-4.21-7.51 4 4 0 1 0-6.58 4.46 43.6 43.6 0 0 1 3.55 6.33M97.36 17.07c4.17 3.05 9-3 4.78-6.35a54 54 0 0 0-7.27-4.59c-4.08-2.13-8.05 3.44-4.38 6.58a4 4 0 0 0 .71.47 45.3 45.3 0 0 1 6.16 3.89m-20-8.52A4 4 0 0 0 79.7 1a4 4 0 0 0-1-.31A57 57 0 0 0 70.11 0a4 4 0 1 0 0 8 49 49 0 0 1 7.27.6Z"></path>
                  </svg>
                </div>
                <h3 className="mt-4 md:mt-6 text-white text-lg md:text-xl">
                  Comprehensive Support
                </h3>
                <p className="my-3 md:my-4 mb-0 font-normal leading-relaxed tracking-wide text-white text-sm md:text-base">
                  From initial consultation to post-launch maintenance, we
                  provide complete support to ensure your digital success at
                  every step.
                </p>
              </div>
            </div>
          </section>
          {/* Stats Section */}
          <section className="py-5 px-4 md:px-6 bg-gray-900">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "3+", label: "Years of Excellence" },
                  { number: "125+", label: "Projects Delivered" },
                  { number: "26+", label: "Industry Awards" },
                  { number: "99%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-3xl font-bold text-indigo-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#171717] py-16 md:py-24 mt-5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#171717]">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Our Vision & Values
                </h2>
                <div className="w-24 h-1 bg-white mx-auto"></div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#171717] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white text-[#171717] mx-auto mb-6 transform ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Our Mission
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      We aim to transform the digital landscape through
                      innovative solutions and meaningful collaborations, making
                      technology accessible and impactful for businesses
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="bg-[#171717] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white text-[#171717] mx-auto mb-6 transform ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Core Values
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      Our foundation is built on unwavering integrity, deep
                      respect for individuals, and a commitment to excellence in
                      everything we do.
                    </p>
                  </div>
                </div>

                <div className="bg-[#171717] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white text-[#171717] mx-auto mb-6 transform ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Future Vision
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      We envision a future where technology seamlessly enhances
                      human potential, solving complex challenges and creating a
                      more connected, efficient world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
