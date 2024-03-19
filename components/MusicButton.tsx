"use client";

import React, { useState } from "react";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";
import AudioPlayer from "./AudioPlayer";

const MusicButton = () => {
  const [playAudio, setPlayAudio] = useState<boolean>(false);
  return (
    <div className="fixed top-0 right-0 m-2 z-50">
      <div
        className="bg-primary-50 rounded-full py-5 px-3 flex items-center justify-center text-complementary-50 cursor-pointer"
        onClick={() => setPlayAudio(!playAudio)}
      >
        {playAudio ? <FaPause /> : <FaPlay />}
        <FaMusic />
        <AudioPlayer src={"/music.ogg"} play={playAudio} />
      </div>
    </div>
  );
};

export default MusicButton;
