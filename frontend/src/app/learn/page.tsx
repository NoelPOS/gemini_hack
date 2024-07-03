"use client";
import { useState } from "react";
import Listening from "../components/Listening";
import Reading from "../components/Reading";
import Writing from "../components/Writing";
import Speaking from "../components/Speaking";

export default function Learn() {
  const [skill, setSkill] = useState("Listening");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="flex items-center justify-center w-full flex-col">
        <p className="text-slate-800">Learn page</p>
        <div className="flex justify-center items-center gap-4">
          <div className="text-slate-800">
            <button onClick={() => setSkill("Listening")}>Listening</button>
          </div>
          <div className="text-slate-800">
            <button onClick={() => setSkill("Reading")}>Reading</button>
          </div>
          <div className="text-slate-800">
            <button onClick={() => setSkill("Writing")}>Writing</button>
          </div>
          <div className="text-slate-800">
            <button onClick={() => setSkill("Speaking")}>Speaking</button>
          </div>
        </div>
        {skill === "Listening" && <Listening />}
        {skill === "Reading" && <Reading />}
        {skill === "Writing" && <Writing />}
        {skill === "Speaking" && <Speaking />}
      </div>
    </main>
  );
}
