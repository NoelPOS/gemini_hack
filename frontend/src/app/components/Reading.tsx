import Image from "next/image";
import React, { useState } from "react";
import images from "../../../constants/images";
import ReadingGenerate from "./Reading/ReadingGenerate";
import ReadingPassage from "./Reading/ReadingPassage";
import ReadingGtMenu from "./Reading/ReadingGtMenu";
import ReadingScore from "./Reading/ReadingScore";

type Props = {};

function Reading({}: Props) {
  const [hasGererated, setHasGenerated] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  return (
    <div className="w-full bg-purple-500 h-full flex flex-col justify-center items-center">
      {!hasGererated && <ReadingGenerate setHasGenerated={setHasGenerated} />}
      {hasGererated && <ReadingPassage setHasAnswered={setHasAnswered} />}
      {hasAnswered && <ReadingGtMenu />}
      {/* <ReadingGenerate />
      <ReadingPassage />
      <ReadingGtMenu />
      <ReadingScore /> */}
    </div>
  );
}

export default Reading;
