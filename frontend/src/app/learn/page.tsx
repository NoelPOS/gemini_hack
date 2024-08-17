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
import robotGen from "../../../assets/images/robotGen.svg";
import Arrow from "../../../assets/images/arrow.svg";
import Image from "next/image";
import ChatBot from "../../../assets/images/chatbot.gif";

interface Word {
  word: string;
  definition: string;
  example_sentence: string[];
}

export default function Learn() {
  const [skill, setSkill] = useState("Listening");
  const [words, setWords] = useState([]);
  const [level, setLevel] = useState("C1: Advanced");
  const [loading, setLoading] = useState(false);
  const [AnimatedText, setAnimatedText] = useState("Generating");
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);

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

  const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const gen = async () => {
    setLoading(true);
    setWords([]);
    let prompt = `List 10 words with definition and example sentence of your choice: ${level}`;
    let result = await model.generateContent(prompt);
    let wordsArray = JSON.parse(result.response.text());
    setWords(wordsArray);
    let wordsList = wordsArray.map((word: any) => word.word);
    const result2 = await run(wordsList.join(", "));
    setText(result2);
    setLoading(false);
  };
  const [text, setText] = useState("");

  async function run(words: string) {
    const prompt =
      "Give me back a paragraph based on the following words: " +
      words +
      ". The paragraph should make sense and be coherent and about 200 words long. ";

    const result = await model2.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prevText) =>
        prevText === "Generating" ? "Practicing" : "Generating"
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectWord = (index: number) => {
    setSelectedWords([words[index]]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-purple-600 to-blue-100">
      <div className="max-w-[1280px] flex items-center justify-center w-full flex-col p-4">
        <p className="text-slate-50 text-4xl">
          Let's start Learning with Gen E Bot!
        </p>

        <div className="w-full flex items-start justify-center items-start gap-12 my-12">
          <div>
            <div className="bg-purple-400 border-pink-400 border-2 rounded-tr-3xl rounded-bl-3xl p-4">
              <p className="text-lg text-slate-50">
                Generate your words of the day!
              </p>
              <div>
                <form>
                  <label className="text-md text-slate-50">
                    Choose your level:
                  </label>
                  <br />
                  <select
                    className="w-[300px] p-2 bg-purple-300 rounded text-white my-4"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="C2: Proficient">C2: Proficient</option>
                    <option value="C1: Advanced">C1: Advanced</option>
                    <option value="B2: Upper Intermediate">
                      B2: Upper Intermediate
                    </option>
                    <option value="B1: Intermediate">B1: Intermediate</option>
                    <option value="A2: Elementary">A2: Elementary</option>
                    <option value="A1: Beginner">A1: Beginner</option>
                  </select>
                </form>
                <div className="flex items-center justify-center">
                  <button
                    onClick={gen}
                    className="w-[250px] p-2 bg-purple-300 rounded text-white mx-auto"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
              <Image
                src={Arrow}
                width={10}
                height={10}
                alt="Arrow"
                className="animate-bounce"
              />
              <Image
                src={robotGen}
                width={150}
                height={150}
                alt="Picture of the robot"
                className="motion-safe:animate-pulse"
              />
            </div>
          </div>
          <div className="p-2 w-[320px] max-h-[600px] bg-purple-400 border-pink-400 border-2 rounded-tr-3xl rounded-bl-3xl p-4">
            {!loading ? (
              words.length > 0 ? (
                <div className="flex flex-col gap-4 items-center justify-center transition-transform">
                  {words.map((word: any, index: number) => (
                    <div
                      className="flex flex-col gap-2 bg-slate-100 w-[280px] rounded-sm p-2 cursor-pointer hover:bg-slate-300"
                      onClick={() => selectWord(index)}
                      key={index}
                    >
                      {word.word}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white text-xl font-bold">
                  No words generated yet. Start{" "}
                  <span className="text-pink-100">{AnimatedText}</span>
                  <span className="animate-ping">.</span>
                  <span className="animate-ping">.</span>
                  <span className="animate-ping">.</span>
                </p>
              )
            ) : (
              <p className="text-white text-xl font-bold">
                <span className="text-pink-100">Generating</span>
                <span className="animate-ping">.</span>
                <span className="animate-ping">.</span>
                <span className="animate-ping">.</span>
              </p>
            )}
          </div>
          <div className="w-[400px]">
            {selectedWords.length > 0 ? (
              <div className="bg-slate-50 rounded-lg p-4 transition ease-in-out duration-300">
                {selectedWords.map((wordObj, index) => (
                  <div key={index}>
                    <p>
                      <strong>Word:</strong> {wordObj?.word}
                    </p>
                    <p>
                      <strong>Definition:</strong> {wordObj?.definition}
                    </p>
                    <p>
                      <strong>Example Sentences:</strong>
                    </p>
                    <ul>
                      {wordObj.example_sentence.map((sentence, i) => (
                        <li key={i}>{sentence}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Image
                  src={ChatBot}
                  width={200}
                  height={200}
                  className="rounded-full mt-6"
                  alt="ChatBot"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex justify-start my-12">
          <p className="text-slate-50 text-4xl">
            Let's practice{" "}
            <span className="text-pink-100"> Four Skills...</span>
          </p>
        </div>

        <div className="flex gap-10 justify-center items-center gap-4 my-6">
          <div className="text-slate-800 relative">
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
        {skill === "Listening" && <Listening text={text} setText={setText} />}
        {skill === "Reading" && <Reading />}
        {skill === "Writing" && <Writing words={words} />}
        {skill === "Speaking" && <Speaking />}
      </div>
    </main>
  );
}
