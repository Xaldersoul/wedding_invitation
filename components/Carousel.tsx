"use client";

import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { images } from "../src/app/lib/images";
import Image from "next/image";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
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
    <section className="pb-10 bg-primary-50">
      <div ref={component} className="mx-2">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full w-full md:w-1/2 rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:block">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-32 w-full md:w-1/2 rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
