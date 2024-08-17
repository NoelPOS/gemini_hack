import React, { useState } from "react";

type Props = {};

const TextInputArea = (props: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    
  }
  return (
    <div>
      <div className="bg-purple-400   p-2 rounded-xl">
        <p className="font-bold text-2xl text-center pb-2 text-white">
          {" "}
          Text Input Area{" "}
        </p>
        <textarea
          className="h-[160px] w-[700px] rounded-xl bg-white pl-2 pt-3 ml-1"
          placeholder="Write your answer here!"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-between mt-2">
          <button className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">
            Reset
          </button>
          <button className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInputArea;
