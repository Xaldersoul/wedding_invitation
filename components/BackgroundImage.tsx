import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: StaticImageData;
}

const BackgroundImageComponent = ({ image }: Props) => {
  return (
    <div className="absolute -z-10">
      <div className="fixed bottom-0 left-0 w-full h-full">
        <Image src={image} alt="test" objectFit="cover" fill />
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
