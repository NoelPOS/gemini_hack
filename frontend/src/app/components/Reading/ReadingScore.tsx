import Image from "next/image";
import React from "react";
import images from "../../../../constants/images";

type Props = {}

const ReadingScore = (props: Props) => {
  return (
    <div className="max-w-[1260px] w-full flex">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <Image
          src={images.writingrobot1}
          alt="robot"
          className="w-[320px] h-[360px]"
        />
        
      </div>
      <div className="mb-12">
        <div className="bg-purple-400 w-[720px] h-[500px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
          <div className="flex justify-end items-end flex-col p-6">
            <div className="bg-white w-full h-full min-w-[500px] min-h-[350px] mt-9 rounded-xl text-center ">
              <div className="pt-10"></div>
              <p className="text-3xl text-purple-400 font-bold  pt-20 pb-20">
                Score!
              </p>
              <button className="w-[256px] h-[56px] rounded-lg text-xl bg-purple-300 text-white font-extrabold">
                    Go to Menu
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingScore;