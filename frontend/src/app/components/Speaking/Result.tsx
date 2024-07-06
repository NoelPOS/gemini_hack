import Image from "next/image";
import React from "react";
import images from "../../../../constants/images";

type Props = {
  status: string;
};

const Result = ({ status }: Props) => {
  const statusMapping = {
    success: {
      img: images.smile_2,
      img2: images.suprise_1,
      text: "Excellent!",
    },
    failure: {
      img: images.sad_1,
      img2: images.try_again_1,
      text: "Try again!",
    },
  };

  const { img, img2, text } =
    statusMapping[status === "success" ? "success" : "failure"];

  return (
    <div className="flex flex-col lg:flex-row items-center bg-purple-800 h-full lg:h-96 justify-center lg:space-x-4 w-full p-4 lg:p-0">
      <div className="mb-4 lg:mb-0">
        <Image
          src={img}
          alt="robot"
          className="w-[200px] h-[200px] object-cover"
        />
      </div>
      <div className="bg-white  w-96 h-64 p-10 rounded-bl-xl rounded-tr-xl flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <p className="text-black text-center text-3xl font-bold">{text}</p>
        <Image
          src={img2}
          alt="smile"
          className="w-[200px] h-[200px] object-cover"
        />
      </div>
    </div>
  );
};

export default Result;
