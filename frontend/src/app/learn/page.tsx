"use client";
import { use, useEffect, useState } from "react";
import Listening from "../components/Listening";
import Reading from "../components/Reading";
import Writing from "../components/Writing";
import Speaking from "../components/Speaking";
import readingRobot from "../assets/img/readingRobot.png";
import robotListening from "../assets/img/robotListening.png";
import robotSpeaking from "../assets/img/robotSpeaking.png";
import robotWriting from "../assets/img/robotWriting.png";
import Image from "next/image";

export default function Learn() {
  const [skill, setSkill] = useState("Listening");
  const [words, setWords] = useState([]);

  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const api = process.env.NEXT_PUBLIC_PUBLICAPI_KEY;
  const genAI = new GoogleGenerativeAI(api);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            word: {
              type: "string",
            },
            definition: {
              type: "string",
            },
            example_sentence: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      },
    },
  });

  const gen = async () => {
    let prompt =
      "List 10 words with definition and example sentence of your choice: C1 level.";
    let result = await model.generateContent(prompt);
    let wordsArray = JSON.parse(result.response.text());
    setWords(wordsArray);
  };

  useEffect(() => {
    console.log(words);
  }, [words]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-purple-600 to-blue-100">
      <div className="flex items-center justify-center w-full flex-col">
        <p className="text-slate-800">Learn page</p>
        <div className="flex gap-10 justify-center items-center gap-4">
          <div className="text-slate-800 relative">
            <button onClick={gen}>Generate</button>
            <button onClick={() => setSkill("Listening")}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={robotListening}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
              </div>
              <p className="absolute top-[45%] left-[25%] transform translate(-50%, -50%) text-white text-xl font-bold">
                Listening
              </p>
            </button>
          </div>
          <div className="text-slate-800 relative">
            <button onClick={() => setSkill("Reading")}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={readingRobot}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
              </div>
              <p className="absolute top-[45%] left-[25%] transform translate(-50%, -50%) text-white text-xl font-bold">
                Reading
              </p>
            </button>
          </div>
          <div className="text-slate-800 relative">
            <button onClick={() => setSkill("Writing")}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={robotWriting}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
              </div>
              <p className="absolute top-[45%] left-[25%] transform translate(-50%, -50%) text-white text-xl font-bold">
                Writing
              </p>
            </button>
          </div>
          <div className="text-slate-800 relative">
            <button onClick={() => setSkill("Speaking")}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={robotSpeaking}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
              </div>
              <p className="absolute top-[45%] left-[25%] transform translate(-50%, -50%) text-white text-xl font-bold">
                Speaking
              </p>
            </button>
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
