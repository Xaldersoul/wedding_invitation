import React from "react";
import { FaMusic } from "react-icons/fa";

const MusicButton = () => {
  return (
    <div className="fixed top-0 right-0 m-2 z-50">
      <div className="bg-primary-50 rounded-full p-4 flex items-center justify-center text-complementary-50 cursor-pointer">
        <FaMusic />
        <audio src="/music.ogg" autoPlay loop></audio>
      </div>
    </div>
  );
};

export default MusicButton;
