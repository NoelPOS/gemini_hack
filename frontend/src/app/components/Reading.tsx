import Image from "next/image";
import React from "react";
import images from "../../../constants/images";
import ReadingGenerate from "./Reading/ReadingGenerate";
import ReadingPassage from "./Reading/ReadingPassage";

type Props = {};

function Reading({}: Props) {
  return (
    <div className="w-full bg-purple-500 h-full flex flex-col justify-center items-center">
      <ReadingGenerate />
      <ReadingPassage />
    </div>
  );
}

export default Reading;
