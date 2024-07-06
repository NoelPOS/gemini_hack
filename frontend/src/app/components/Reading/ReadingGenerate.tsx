import React from "react";
import images from "../../../../constants/images";
import Image from "next/image";

type Props = {};

const ReadingGenerate = (props: Props) => {
  return (
    <div className="max-w-[1260px] h-96 w-full items-center justify-center">
      <div className="flex-none w-1/5 h-2/4 ml-40">
        <Image 
        src={images.robot_reading} 
        alt="robot"
        className="w-[320px] h-[510px]" />
      </div>
    </div>
  );
};

export default ReadingGenerate;
