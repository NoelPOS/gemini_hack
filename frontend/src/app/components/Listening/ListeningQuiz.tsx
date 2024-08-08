'use client'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react'
import images from '../../../../constants/images'

const { GoogleGenerativeAI } = require('@google/generative-ai')
// import { GoogleGenerativeAI } from '@google/generative-ai'

const api = process.env.NEXT_PUBLIC_PUBLICAPI_KEY as string
const genAI = new GoogleGenerativeAI(api)
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  generationConfig: {
    responseMimeType: 'application/json',
    responseSchema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          question: {
            type: 'string',
          },
          answers: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          rightanswer: {
            type: 'string',
          },
          explanation: {
            type: 'string',
          },
        },
      },
    },
  },
})

async function run(words: string) {
  const prompt =
    'Give me back five multiple choice questions based on the following paragraph: ' +
    words +
    '. The questions should be targeted for listening practice. '
  const result = await model.generateContent(prompt)
  const text = result.response.text()
  return text
}

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
  survey: boolean
  setSurvey: Dispatch<SetStateAction<boolean>>
  summary: boolean
  setSummary: Dispatch<SetStateAction<boolean>>
}

const ListeningQuiz = (props: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await run(props.text)
      setQandA(JSON.parse(result))
    }

    fetchData()
  }, [])
  // const QandA = [
  //   {
  //     question: 'What is the capital of France?',
  //     answers: ['Paris', 'London', 'Berlin', 'Madrid'],
  //     rightAnswer: 'Paris',
  //     explanation: 'Paris is the capital of France',
  //   },
  // ]
  const [QandA, setQandA] = useState([
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      rightAnswer: 'Paris',
      explanation: 'Paris is the capital of France',
    },
  ])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)

  const checkAnswer = () => {
    if (answer === QandA[0].rightAnswer) {
      setScore(true)
      setHasAnswered(true)
    } else {
      setScore(false)
      setHasAnswered(true)
    }
  }

  return (
    <div className='max-w-[1260px] w-full flex'>
      <div className='flex flex-col w-2/5 justify-center items-center'>
        <Image
          src={images.writingrobot1}
          alt='robot'
          className='w-[320px] h-[360px]'
        />
        <div className='flex items-center justify-center'>
          <button
            className='w-[256px] h-[56px] rounded-lg bg-pink-200 text-white font-extrabold'
            onClick={checkAnswer}
          >
            Check
          </button>
        </div>
      </div>
      <div className='mb-12'>
        <div className='bg-purple-400 w-[720px] min-h-[500px] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100'>
          <div className='flex justify-center items-center flex-col p-2 h-full'>
            <div className='bg-white  w-full h-full p-6 rounded-lg flex items-center justify-center overflow-y-scroll'>
              <p className='text-slate-800 text-3xl font-bold'>
                {QandA[currentQuestion].question}
              </p>
            </div>
            <div className='w-full flex justify-center items-center flex-wrap gap-12 mt-12 shrink-0'>
              {QandA[currentQuestion].answers.map((option, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl flex items-center justify-center'
                >
                  <div
                    className={`w-[280px] ${
                      answer === option ? 'bg-green-100 rounded-lg' : ''
                    }`}
                  >
                    <button
                      className='text-slate-800 text-3xl p-4'
                      onClick={() => setAnswer(option)}
                    >
                      {option}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {score && (
              <div className='flex items-start w-full flex-col justify-start'>
                <p className='text-green-100 text-4xl font-bold mt-8'>
                  Your answer is correct!
                </p>
                <div className='p-2 bg-white rounded w-full mt-4'>
                  <p className='text-slate-600 text-xl font-bold'>
                    {QandA[currentQuestion].explanation}
                  </p>
                </div>
                {currentQuestion === QandA.length - 1 && (
                  <button
                    className='btn bg-pink-100 px-2 rounded-lg px-8 py-2 mt-2 self-end'
                    onClick={() => {
                      props.setSurvey(false)
                      props.setSummary(true)
                    }}
                  >
                    Finish
                  </button>
                )}
                {currentQuestion !== QandA.length - 1 && (
                  <button
                    className='btn bg-pink-100 px-2 rounded-lg px-8 py-2 mt-2 self-end'
                    onClick={() => {
                      setCurrentQuestion(
                        (currentQuestion) => currentQuestion + 1
                      )
                      setHasAnswered(false)
                      setAnswer('')
                      setScore(false)
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
            {hasAnswered && !score && (
              <div className='flex items-start w-full flex-col justify-start'>
                <p className='text-red-600 text-4xl font-bold mt-8'>
                  Your answer is incorrect!
                </p>
                <div className='p-2 bg-white rounded w-full mt-4'>
                  <p className='text-slate-600 text-xl font-bold'>Reason: </p>
                  <p className='text-slate-600 text-xl font-bold'>
                    {QandA[currentQuestion].explanation}
                  </p>
                </div>
                {currentQuestion === QandA.length - 1 && (
                  <button
                    className='btn bg-pink-100 px-2 rounded-lg px-8 py-2 mt-2 self-end'
                    onClick={() => {
                      props.setSurvey(false)
                      props.setSummary(true)
                    }}
                  >
                    Finish
                  </button>
                )}
                {currentQuestion !== QandA.length - 1 && (
                  <button
                    className='btn bg-pink-100 px-2 rounded-lg px-8 py-2 mt-2 self-end'
                    onClick={() => {
                      setCurrentQuestion(
                        (currentQuestion) => currentQuestion + 1
                      )
                      setHasAnswered(false)
                      setAnswer('')
                      setScore(false)
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListeningQuiz
