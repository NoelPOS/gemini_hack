import React from "react";
import images from "../../../../constants/images";
import Image from "next/image";

type Props = {
  setHasGenerated: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReadingGenerate = ({ setHasGenerated }: Props) => {
  return (
    <div className="max-w-[1260px] w-full flex">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <Image
          src={images.robot_reading}
          alt="robot"
          className="w-[320px] h-[360px]"
        />
        <div className="flex items-center justify-center">
          <button
            className="w-[256px] h-[56px] rounded-lg bg-pink-200 text-white font-extrabold"
            onClick={() => setHasGenerated(true)}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="mb-12 mt-12">
        <div className="bg-purple-400 w-[720px] h-[500px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
          <div className="flex justify-end flex-col p-8">
            <p className="text-white text-4xl">
              AI will now generate a paragraph for you to read. There will be a
              timer and when the timer ends, you will be taking a quiz. Let's
              go!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingGenerate;
