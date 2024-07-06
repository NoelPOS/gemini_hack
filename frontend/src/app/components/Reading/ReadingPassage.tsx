import Image from "next/image";
import React from "react";
import images from "../../../../constants/images";

type Props = {};

const ReadingPassage = (props: Props) => {
  return (
    <div className="max-w-[1260px] w-full flex">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <Image
          src={images.writingrobot1}
          alt="robot"
          className="w-[320px] h-[360px]"
        />
        <div className="flex items-center justify-center">
          <button className="w-[256px] h-[56px] rounded-lg bg-pink-200 text-white font-extrabold">
            Next
          </button>
        </div>
      </div>
      <div className="mb-12">
        <div className="bg-purple-400 w-[720px] h-[500px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
          <div className="flex justify-end items-end flex-col p-6">
            <div className="bg-white max-w-[200px] min-w-[180px] h-[52px] rounded-lg flex items-center justify-center mt-6 mr-20">
              <p className="text-slate-500 text-xl font-extrabold">2:20</p>
            </div>
            <div className="bg-white w-full h-full min-w-[500px] max-h-[300px] mt-6 rounded-xl overflow-y-scroll">
              <p className="text-slate-800 text-2xl p-4">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPassage;
