import Image from "next/image";
import React, { useState } from "react";
import images from "../../../../constants/images";

type Props = {};

const ReadingQuestion = (props: Props) => {
  const QandA = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      rightAnswer: "Paris",
      explanation: "Paris is the capital of France",
    },
  ];
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const checkAnswer = () => {
    if (answer === QandA[0].rightAnswer) {
      setScore(true);
      setHasAnswered(true);
    } else {
      setScore(false);
      setHasAnswered(true);
    }
  };
  console.log(answer);
  return (
    <div className="max-w-[1260px] w-full flex">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <Image
          src={images.writingrobot1}
          alt="robot"
          className="w-[320px] h-[360px]"
        />
        <div className="flex items-center justify-center">
          <button
            className="w-[256px] h-[56px] rounded-lg bg-pink-200 text-white font-extrabold"
            onClick={checkAnswer}
          >
            Check
          </button>
        </div>
      </div>
      <div className="mb-12">
        <div className="bg-purple-400 w-[720px] min-h-[500px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100">
          <div className="flex justify-center items-center flex-col p-2 h-full">
            <div className="bg-white  w-full h-full p-6 rounded-lg flex items-center justify-center overflow-y-scroll">
              <p className="text-slate-800 text-3xl font-bold">
                {QandA[0].question}
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap gap-12 mt-12 shrink-0">
              {QandA[0].answers.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl flex items-center justify-center"
                >
                  <div
                    className={`w-[280px] ${
                      answer === option ? "bg-green-100 rounded-lg" : ""
                    }`}
                  >
                    <button
                      className="text-slate-800 text-3xl p-4"
                      onClick={() => setAnswer(option)}
                    >
                      {option}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {score && (
              <div className="flex items-start w-full flex-col justify-start">
                <p className="text-green-100 text-4xl font-bold mt-8">
                  Your answer is correct!
                </p>
                <div className="p-2 bg-white rounded w-full mt-4">
                  <p className="text-slate-600 text-xl font-bold">
                    {QandA[0].explanation}
                  </p>
                </div>
              </div>
            )}
            {hasAnswered && !score && (
              <div className="flex items-start w-full flex-col justify-start">
                <p className="text-red-600 text-4xl font-bold mt-8">
                  Your answer is incorrect!
                </p>
                <div className="p-2 bg-white rounded w-full mt-4">
                  <p className="text-slate-600 text-xl font-bold">Reason: </p>
                  <p className="text-slate-600 text-xl font-bold">
                    {QandA[0].explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingQuestion;
