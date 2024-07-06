import React from "react";

type Props = {};

const WordList = (props: Props) => {
  return (
    <div>
      <div className="bg-purple-400 w-[400px] h-[400px] p-4 rounded-tr-3xl rounded-bl-3xl">
        <div className="flex items-center justify-center">
          <h1 className="text-white font-extrabold text-xl">Word List</h1>
        </div>

        <div>
          <div className="flex">
            <div>Word</div>
            <div>Word</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordList;
