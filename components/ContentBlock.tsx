"use client";

import React, { useEffect, useRef } from "react";
import MainBtn from "./MainBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  Icon?: React.ReactElement;
  title?: string;
  text?: string;
  btnText?: string;
  url?: string;
  transparent?: boolean;
  alt?: boolean;
}

const ContentBlock = ({
  Icon,
  title,
  text,
  btnText,
  url,
  transparent = false,
  alt = false,
}: Props) => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        component.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out(1,0.3)",
          scrollTrigger: {
            trigger: component.current,
            start: "top bottom-=150px",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`${
        transparent ? "py-28" : "py-10"
      } w-full flex items-center justify-center ${
        !transparent && "bg-nightblue-50"
      } ${alt && "bg-silver-50"}`}
    >
      <div
        ref={component}
        className={`elemento-a-animar flex flex-col items-center justify-center w-5/6 sm:w-1/2 gap-6`}
      >
        {Icon && Icon}
        <h2
          className={`text-xl text-center sm:text-3xl ${
            alt ? "text-nightblue-50" : "text-silver-50"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-center ${
            alt ? "text-nightblue-50" : "text-silver-50"
          }`}
        >
          {text}
        </p>
        {btnText && <MainBtn text={btnText} url={url} alt={alt} />}
      </div>
    </div>
  );
};

export default ContentBlock;
