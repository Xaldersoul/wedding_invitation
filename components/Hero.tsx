"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(".main-title", { opacity: 0 }, { duration: 5, opacity: 1 });
  }, []);
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div className="main-title opacity-0 flex flex-col items-center justify-center">
        <p className="font-great-vibes text-8xl sm:text-[10rem] text-silver-50">
          Caro
        </p>
        <p className="text-silver-50 text-3xl">¡MIS XV!</p>
      </div>
    </div>
  );
}
