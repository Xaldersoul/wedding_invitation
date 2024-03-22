import React from "react";

interface Props {
  text: string;
}

const DateTitle = ({ text }: Props) => {
  return (
    <div className="dateline flex items-center w-3/4 md:w-full">
      <div className="flex-grow border-t border-t-primary-50"></div>
      <span className="px-3 text-primary-50 text-xl md:text-3xl">{text}</span>
      <div className="flex-grow border-t border-t-primary-50"></div>
    </div>
  );
};

export default DateTitle;
