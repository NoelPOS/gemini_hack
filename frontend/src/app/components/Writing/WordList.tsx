import React from "react";

type Props = {};

const WordList = (props: Props) => {
  return (
    <div>
        <div className="bg-purple-400 h-[350px] w-[350px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
            <h1 className="text-center font-bold text-xl text-white pt-4">Question</h1>
            <div>
            <div className="flex; grid grid-rows-5 grid-cols-2 gap-3.5 justify-center items-center pl-5 pr-5 pt-7 pb-3" >
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
                <div className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Word 1</div>
            </div>
        </div>
        </div>
        
    </div>
  );
};

export default WordList;import React from "react";

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
            <div className="">Word</div>
            <div>Word</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordList;
