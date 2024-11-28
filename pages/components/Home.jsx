import React, { useEffect, useRef } from "react";
// import Spotlight from "./ui/spotlight";
import { FlipWords } from "./ui/flip-words";
import * as THREE from "three";

export default function Home() {
  const words = [
    "Launch SaaS platforms that redefine industries.",
    "Transform your vision into reality with MVP product development.",
    "Elevate your brand with cutting-edge e-commerce solutions.",
    // "SaaS Platforms",
  ];
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

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create grid of points
    const geometry = new THREE.BufferGeometry();
    const points = [];

    for (let i = 0; i < 1000; i++) {
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
      size: 0.2,
      transparent: true,
      opacity: 0.6,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    camera.position.z = 50;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      pointCloud.rotation.x += 0.001;
      pointCloud.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 bg-black" />

      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 md:mx-36"
        fill="white"
      /> */}

      <div className="mt-10 max-w-4xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text">
          <FlipWords
            words={words}
            duration={4000}
            className="font-semibold text-neutral-400 text-center leading-tight"
          />
        </h1>
      </div>
    </div>
  );
}
