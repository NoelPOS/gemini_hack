import Image from "next/image";
import React from "react";
import images from "../../../constants/images";

type Props = {};

function Reading({}: Props) {
  return (
    <div className="w-screen bg-purple-500 h-96 flex">
      <div className="flex-none w-3/5 h-2/4">
        <img
          src="path_to_your_image.jpg"
          alt="Description of image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow text-slate-800 p-4 h-2/4">
        Reading
      </div>
      <div className="text-slate-800 flex">
        <div className="flex flex-col w-2/5">
          <Image src={images.writingrobot1} alt="robot" />
        </div>
        <div className="flex"></div>
      </div>
    </div>
    
  );
  
    
  
}


export default Reading;
