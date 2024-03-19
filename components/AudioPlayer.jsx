import React, { useRef, useEffect } from "react";

export default function AudioPlayer({ src, play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play();
    } else if (!play && audioRef.current) {
      audioRef.current.pause();
    }
  }, [play]);

  return <audio ref={audioRef} src={src} />;
}
