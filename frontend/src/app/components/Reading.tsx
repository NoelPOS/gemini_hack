import Image from "next/image";
import React from "react";
import images from "../../../constants/images";

type Props = {};

function Reading({}: Props) {
  return (
    <div className="text-slate-800 flex">
      <div className="flex flex-col w-2/5">
        <Image src={images.writingrobot1} alt="robot" />
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default Reading;
