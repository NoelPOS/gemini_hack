import React, { useState } from "react";
import Start from "./Speaking/Start";
import Conversations from "./Speaking/Conversations";
import Result from "./Speaking/Result";
type Props = {};

function Speaking({}: Props) {
  const [page, setPage] = useState("start");
  const [success, setSuccess] = useState("failure");
  return (
    <div className="w-screen flex flex-col items-center justify-center ">
      {page === "start" && <Start setPage={setPage} />}
      {page === "conversation" && <Conversations setPage={setPage} />}
      {page === "result" && <Result status={success} />}
    </div>
  );
}

export default Speaking;
