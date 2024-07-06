import React from "react";
import WordList from "./Writing/WordList";
import Question from "./Writing/Question";
import TextInputArea from "./Writing/TextInputArea";
import AiFeedback from "./Writing/AiFeedback";

type Props = {};

function Writing({}: Props) {
  return (
    <div className="flex flex-col h-screen p-4 space-y-5">
      <div className="flex space-x-8">
        <WordList />
        <Question />
      </div>
      <TextInputArea />
      <AiFeedback />
    </div>
  );
}

export default Writing;
