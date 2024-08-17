import React from "react";
import { useState } from "react";
import WritingFirst from "./Writing/WritingFirst";
import WritingSummary from "./Writing/WritingSummary";
import WritingQuestion from "./Writing/WritingQuestion";

type Props = {
  words: any;
};

function Writing({ words }: Props) {
  const [start, setStart] = useState(true);
  const [practice, setPractice] = useState(false);
  const [summary, setSummary] = useState(false);
  return (
    (start && (
      <WritingFirst
        start={start}
        setStart={setStart}
        practice={practice}
        setPractice={setPractice}
      />
    )) ||
    (practice && (
      <WritingQuestion
        practice={practice}
        setPractice={setPractice}
        summary={summary}
        setSummary={setSummary}
        words={words}
      />
    )) ||
    (summary && <WritingSummary />)
  );
}

export default Writing;
