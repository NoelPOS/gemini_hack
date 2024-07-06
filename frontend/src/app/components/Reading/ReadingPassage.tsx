import Image from "next/image";
import React from "react";
import images from "../../../../constants/images";

type Props = {};

const ReadingPassage = (props: Props) => {
  return (
    <div className="max-w-[1260px]">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <Image src={images.writingrobot1} alt="robot" />
        <div className=" w-[160px] rounded-sm">
          <button className="w-[160px] rounded-lg bg-pink-200 text-white font-extrabold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingPassage;
