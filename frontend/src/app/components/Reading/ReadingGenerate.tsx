import React from "react";

type Props = {};

const ReadingGenerate = (props: Props) => {
  return (
    <div className="max-w-[1260px] h-96 w-full items-center justify-center">
      <div className="flex-none w-3/5 h-2/4">
        <img
          src="path_to_your_image.jpg"
          alt="Description of image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ReadingGenerate;
