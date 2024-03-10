import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  className?: string;
  imageSrc: StaticImageData;
  alt: string;
};

const ImageComponent = ({ children, className, imageSrc, alt }: Props) => {
  const classes = clsx("relative", "overflow-hidden", className);
  return (
    <div className={classes}>
      <Image
        src={imageSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="z-10 flex flex-col md:flex-row h-full justify-center items-start gap-10 mx-4">
        {children}
      </div>
    </div>
  );
};

export default ImageComponent;
