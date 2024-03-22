import React from "react";

interface Props {
  numero: number;
  text: string;
}

const TimerRing = ({ numero, text }: Props) => {
  const porcentajeCierre = (numero / 100) * 100;

  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
      <div
        className="absolute inset-0 bg-complementary-50 rounded-full"
        style={{
          clipPath: `circle(${porcentajeCierre}% at 50% 50%)`,
          transition: "clip-path 0.5s ease-in-out",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold text-primary-50">{numero}</span>
        <span className="text-lg font-bold text-primary-50">{text}</span>
      </div>
    </div>
  );
};

export default TimerRing;
