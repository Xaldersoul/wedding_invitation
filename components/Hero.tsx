"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import DateTitle from "./DateTitle";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".main-title",
      { opacity: 0 },
      { duration: 1.5, opacity: 1, ease: "power3.out" }
    );

    tl.add([
      gsap.fromTo(
        ".dateline",
        {
          y: -6,
          opacity: 0,
        },
        { duration: 2, y: 0, opacity: 1, ease: "power3.out" }
      ),
      gsap.fromTo(
        ".dateline2",
        {
          y: 6,
          opacity: 0,
        },
        { duration: 2, y: 0, opacity: 1, ease: "power3.out" }
      ),
    ]);
  }, []);
  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div className="main-title opacity-0 flex flex-col items-center justify-center">
        <DateTitle text="19.09.25" />
        <p className="font-great-vibes text-6xl sm:text-8xl text-primary-50 text-center mt-4">
          Patrick & Stephanie
        </p>
        <p className="text-primary-50 text-3xl">¡NOS CASAMOS!</p>
        <div className="flex-grow border-t border-t-primary-50 w-3/4 md:w-full mt-4 dateline2"></div>
      </div>
    </div>
  );
}
