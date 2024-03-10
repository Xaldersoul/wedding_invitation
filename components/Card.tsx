"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import MainBtn from "./MainBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title?: string;
  text?: string;
  btnText?: string;
  url?: string;
  alt?: boolean;
  backgroundImage: StaticImageData;
}

const Card = ({
  title,
  text,
  btnText,
  url,
  alt = false,
  backgroundImage,
}: Props) => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        component.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out(1,0.3)",
          scrollTrigger: {
            trigger: component.current,
            start: "center bottom",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <div className="md:w-[30rem] z-20 rounded-lg my-8" ref={component}>
      <Image
        alt=""
        src={backgroundImage}
        objectFit="cover"
        quality={100}
        className="h-1/2 rounded-t-lg"
      />
      <div className="bg-cardcolor-50 flex flex-col gap-4 items-center justify-center h-1/2 rounded-b-lg p-6">
        {title && (
          <h2
            className={`text-xl text-center sm:text-3xl ${
              alt ? "text-complementary-50" : "text-primary-50"
            }`}
          >
            {title}
          </h2>
        )}
        <p
          className={`text-center ${
            alt ? "text-slate-500" : "text-primary-50"
          }`}
        >
          {text}
        </p>
        {btnText && <MainBtn text={btnText} url={url} alt={alt} />}
      </div>
    </div>
  );
};

export default Card;
