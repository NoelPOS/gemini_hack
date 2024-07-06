import React from "react";
import Image from "next/image";
import images from "../../../../constants/images";

type Props = {
  setPage: (page: string) => void;
};

const Start = ({ setPage }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-indigo-100 h-full lg:h-96 justify-center lg:space-x-4 w-full p-4 lg:p-0">
      <div className="mb-4 lg:mb-0">
        <Image
          src={images.robot_speaking1}
          className="w-48 h-48 object-cover rounded-md"
          alt="robot_speak"
        />
        <button
          className="bg-blue-400 py-1 px-10 rounded-lg font-bold mt-4"
          onClick={() => setPage("conversation")}
        >
          Start
        </button>
      </div>

      <div className="bg-teal-900 w-full lg:w-96 border-4 h-64 p-10 rounded-bl-xl rounded-tr-xl flex items-center justify-center">
        <p className="text-white text-center text-xl font-bold">
          AI will now generate a conversation for you to practice. Let’s go!
        </p>
      </div>
    </div>
  );
};

export default Start;
