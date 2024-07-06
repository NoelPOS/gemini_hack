import React from "react";
import WordList from "./Writing/WordList";
import Question from "./Writing/Question";

type Props = {};

function Writing({}: Props) {
  return (
    <div className="flex h-screen p-4">
      <div className="flex-grow flex items-start space-x-8">
        <WordList />
        <Question />
      </div>
    </div>
  );
}

export default Writing;
