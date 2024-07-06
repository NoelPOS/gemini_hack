import React from "react";
import Conversation from "./Conversation";
import Image from "next/image";
import images from "../../../../constants/images";

type Props = {
  setPage: (page: string) => void;
};

const Component = ({ setPage }: Props) => {
  const messages = [
    { text: "Hello everyone!", fromSelf: false, sender: "U" },
    { text: "How's it going?", fromSelf: false, sender: "U" },
    {
      text: "Hello! It's going well, thanks for asking.",
      fromSelf: true,
      sender: "U",
    },
    { text: "What about you?", fromSelf: true, sender: "U" },
  ];

  return (
    <div className="flex flex-col w-screen items-center bg-purple-600">
      {/* Main content */}
      <div className="max-w-[1024px] w-full mb-auto">
        <Conversation messages={messages} />
      </div>

      <button
        className="bg-white border-8 border-purple-700 rounded-full p-2 mt-4 mb-4"
        onClick={() => setPage("result")}
      >
        <Image src={images.mcphone} alt="mcphone" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Component;
