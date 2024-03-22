"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";
import AudioPlayer from "./AudioPlayer";
import gsap from "gsap";

const MusicButton = () => {
  const [playAudio, setPlayAudio] = useState<boolean>(false);

  const circleRef = useRef(null); // Referencia al círculo

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (playAudio) {
        gsap.to(circleRef.current, {
          scale: 1.1,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(circleRef.current, {
          y: 10,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      }
    }, circleRef);
    return () => ctx.revert();
  }, [playAudio]);

  return (
    <div className="fixed top-0 right-0 m-2 z-50">
      <div
        className="bg-primary-50 rounded-full py-5 px-3 flex items-center justify-center text-complementary-50 cursor-pointer"
        onClick={() => setPlayAudio(!playAudio)}
        ref={circleRef}
      >
        {playAudio ? <FaPause /> : <FaPlay />}
        <FaMusic />
        <AudioPlayer src={"/music.ogg"} play={playAudio} />
      </div>
    </div>
  );
};

export default MusicButton;
