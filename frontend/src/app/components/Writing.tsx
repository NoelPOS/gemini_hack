import React from "react";
import WordList from "./Writing/WordList";
type Props = {};

function Writing({}: Props) {
  return (
    <div className="text-slate-800">
      Writing
      <WordList />
    </div>
  );
}

export default Writing;
