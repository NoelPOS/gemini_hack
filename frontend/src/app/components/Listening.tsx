'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const { GoogleGenerativeAI } = require('@google/generative-ai')

import listeningRobot from '../assets/img/robotListening.png'
import mainRobot from '../assets/img/mainRobot.png'

function synthesizeSpeech(text: string) {
  const speech = new SpeechSynthesisUtterance(text)
  speech.lang = 'en-US'
  speech.voice = window.speechSynthesis
    .getVoices()
    .find((v) => v.name === 'Microsoft Zira') // Optional: specify voice
  speech.rate = 1.0
  speech.pitch = 0.0
  speech.volume = 1.0

  window.speechSynthesis.speak(speech)
}

export default function Listening({ text }: { text: string }) {
  const router = useRouter()
  const [stage, setStage] = useState('start')
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)

  const api = process.env.NEXT_PUBLIC_API_KEY as string
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
            question: { type: 'string' },
            answers: { type: 'array', items: { type: 'string' } },
            rightanswer: { type: 'string' },
            explanation: { type: 'string' },
          },
        },
      },
    },
  })

  async function generateQuestions(text: string) {
    const prompt = `Give me back five multiple choice questions based on the following paragraph: ${text}. {
        question: 'Example Question?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        rightanswer: 'Answer 1',
        explanation: 'This is an explanation for the correct answer.',
      } like this.`
    const result = await model.generateContent(prompt)
    const questions = JSON.parse(result.response.text())
    console.log(questions)
    setQuestions(questions)
  }

  useEffect(() => {
    if (stage === 'quiz') {
      generateQuestions(text)
    }
  }, [stage, text])

  const handleStartPractice = () => {
    synthesizeSpeech(text)
    setStage('practice')
  }
  const handleStartQuiz = () => setStage('quiz')
  const handleFinish = () => router.push('./')

  const checkAnswer = () => {
    const correct = selectedAnswer === questions[currentQuestion].rightanswer
    setIsCorrect(correct)
    setHasAnswered(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
      setHasAnswered(false)
    } else {
      setStage('summary')
    }
  }

  return (
    <div className='min-h-screen bg-purple-200 text-white py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        {stage === 'start' && (
          <div className='flex flex-col items-center'>
            <Image
              src={listeningRobot}
              width={200}
              height={200}
              alt='Listening Robot'
            />
            <button
              className='mt-4 bg-pink-100 text-purple-800 px-8 py-2 rounded-lg'
              onClick={handleStartPractice}
            >
              Start Listening Practice
            </button>
            <div className='mt-8 bg-purple-400 w-full p-6 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-400'>
              <p className='text-center'>
                AI will now ask you a few questions to practice the words that
                you've learned today!
              </p>
            </div>
          </div>
        )}

        {stage === 'practice' && (
          <div className='flex flex-col items-center'>
            <Image src={mainRobot} width={200} height={200} alt='Main Robot' />
            <button
              className='mt-4 bg-pink-100 text-purple-800 px-6 py-2 rounded-lg'
              onClick={handleStartQuiz}
            >
              Take A Quiz
            </button>
            <div className='mt-8 bg-purple-400 w-full p-6 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-200'>
              <p className='text-center bg-white text-black p-10 rounded-xl'>
                {text}
              </p>
            </div>
          </div>
        )}

        {stage === 'quiz' && (
          <div className='flex flex-col items-center'>
            <div className='bg-purple-400 w-full p-6 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-100'>
              <h2 className='text-2xl font-bold mb-4'>
                {questions[currentQuestion]?.question}
              </h2>
              <div className='space-y-4'>
                {questions[currentQuestion] &&
                  questions[currentQuestion]?.answers.map((answer, index) => (
                    <button
                      key={index}
                      className={`w-full p-2 text-left rounded-lg ${
                        selectedAnswer === answer
                          ? 'bg-green-100 text-purple-800'
                          : 'bg-white text-purple-800'
                      }`}
                      onClick={() => setSelectedAnswer(answer)}
                    >
                      {answer}
                    </button>
                  ))}
              </div>
              {!hasAnswered ? (
                <button
                  className='mt-4 bg-pink-100 text-purple-800 px-6 py-2 rounded-lg'
                  onClick={checkAnswer}
                >
                  Check Answer
                </button>
              ) : (
                <div className='mt-4'>
                  <p
                    className={`text-xl font-bold ${
                      isCorrect ? 'text-green-100' : 'text-red-600'
                    }`}
                  >
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </p>
                  <p className='mt-2 text-white'>
                    {questions[currentQuestion]?.explanation}
                  </p>
                  <button
                    className='mt-4 bg-pink-100 text-purple-800 px-6 py-2 rounded-lg'
                    onClick={nextQuestion}
                  >
                    {currentQuestion < questions.length - 1
                      ? 'Next Question'
                      : 'Finish Quiz'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {stage === 'summary' && (
          <div className='flex flex-col items-center'>
            <Image src={mainRobot} width={200} height={200} alt='Main Robot' />
            <div className='mt-8 bg-purple-400 w-full p-6 rounded-tr-3xl rounded-bl-3xl border-2 border-pink-400'>
              <p className='text-center bg-white text-black p-10 rounded-xl'>
                Well done! Your listening skills have improved!
              </p>
            </div>
            <button
              className='mt-4 bg-purple-300 text-white px-6 py-2 rounded-lg'
              onClick={handleFinish}
            >
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
