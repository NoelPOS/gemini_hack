import React, { useState } from "react";
import Start from "./Speaking/Start";
import Conversations from "./Speaking/Conversations";
import Result from "./Speaking/Result";
type Props = {};

function Speaking({}: Props) {
  const [page, setPage] = useState("conversation");
  const [success, setSuccess] = useState("failure");
  const [transcript, setTranscript] = useState("");
  return (
    <div className="w-screen flex flex-col items-center justify-center ">
      {page === "start" && <Start setPage={setPage} />}
      {page === "conversation" && (
        <Conversations setPage={setPage} setTranscript={setTranscript} />
      )}
      {page === "result" && <Result status={success} transcript={transcript} />}
    </div>
  );
}

export default Speaking;
