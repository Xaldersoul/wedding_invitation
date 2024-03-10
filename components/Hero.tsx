"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".main-title",
      { opacity: 0 },
      { duration: 5, opacity: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div className="main-title opacity-0 flex flex-col items-center justify-center">
        <p className="font-great-vibes text-6xl sm:text-8xl text-primary-50 text-center">
          Patrick & Stephanie
        </p>
        <p className="text-primary-50 text-3xl">¡NOS CASAMOS!</p>
      </div>
    </div>
  );
}
