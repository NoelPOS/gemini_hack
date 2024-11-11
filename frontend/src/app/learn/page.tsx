'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GoogleGenerativeAI } from '@google/generative-ai'

import getwords from '../model/model'

// Assume these components are defined in separate files
import Listening from '../components/Listening'
import Reading from '../components/Reading'
import Writing from '../components/Writing'
import Speaking from '../components/Speaking'

// Import images (adjust paths as necessary)
import readingRobot from '../assets/img/readingRobot.png'
import robotListening from '../assets/img/robotListening.png'
import robotSpeaking from '../assets/img/robotSpeaking.png'
import robotWriting from '../assets/img/robotWriting.png'
import robotGen from '../../../assets/images/robotGen.svg'
import Arrow from '../../../assets/images/arrow.svg'
import ChatBot from '../../../assets/images/chatbot.gif'

interface Word {
  word: string
  definition: string
  example_sentence: string[]
}

const skillImages = [
  { name: 'Listening', src: robotListening },
  { name: 'Reading', src: readingRobot },
  { name: 'Writing', src: robotWriting },
  { name: 'Speaking', src: robotSpeaking },
]

const levels = [
  'C2: Proficient',
  'C1: Advanced',
  'B2: Upper Intermediate',
  'B1: Intermediate',
  'A2: Elementary',
  'A1: Beginner',
]

export default function Learn() {
  const [skill, setSkill] = useState('Listening')
  const [words, setWords] = useState<Word[]>([])
  const [level, setLevel] = useState('C1: Advanced')
  const [loading, setLoading] = useState(false)
  const [animatedText, setAnimatedText] = useState('Generating')
  const [selectedWords, setSelectedWords] = useState<Word[]>([])
  const [text, setText] = useState('')

  const api = process.env.NEXT_PUBLIC_API_KEY
  const genAI = new GoogleGenerativeAI(api)

  const generateWords = async () => {
    setLoading(true)
    setWords([])
    try {
      const result = await getwords(level)
      const wordsArray: Word[] = JSON.parse(result.response.text())
      setWords(wordsArray)
      console.log(wordsArray)

      // const wordsList = wordsArray.map((word) => word.word).join(', ')
      // const model2 = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
      // const result2 = await model2.generateContent(
      //   `Give me back a paragraph based on the following words: ${wordsList}. The paragraph should make sense and be coherent and about 200 words long.`
      // )
      // setText(result2.response.text())
    } catch (error) {
      console.error('Error generating content:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prev) =>
        prev === 'Generating' ? 'Practicing' : 'Generating'
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className='min-h-screen bg-gradient-to-b from-purple-600 to-blue-100 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-center mb-12'>
          Let's start Learning with Gen E Bot!
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-purple-400 border-pink-400 border-2 rounded-tr-3xl rounded-bl-3xl p-6'>
            <h2 className='text-2xl font-semibold mb-4'>
              Generate your words of the day!
            </h2>
            <form className='mb-4'>
              <label className='block mb-2'>Choose your level:</label>
              <select
                className='w-full p-2 bg-purple-300 rounded text-white'
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </form>
            <button
              onClick={generateWords}
              className='w-full p-2 bg-purple-500 rounded text-white hover:bg-purple-600 transition'
            >
              Generate
            </button>
            <div className='flex justify-center mt-4'>
              <Image
                src={Arrow}
                width={20}
                height={20}
                alt='Arrow'
                className='animate-bounce'
              />
            </div>
            <div className='flex justify-center mt-2'>
              <Image
                src={robotGen}
                width={150}
                height={150}
                alt='Robot'
                className='motion-safe:animate-pulse'
              />
            </div>
          </div>

          <div className='bg-purple-400 border-pink-400 border-2 rounded-tr-3xl rounded-bl-3xl p-6 overflow-y-auto max-h-[600px]'>
            {!loading ? (
              words.length > 0 ? (
                <div className='space-y-4'>
                  {words.map((word, index) => (
                    <button
                      key={index}
                      className='w-full text-left bg-slate-100 text-purple-800 rounded p-2 hover:bg-slate-200 transition'
                      onClick={() => setSelectedWords([word])}
                    >
                      {word.word}
                    </button>
                  ))}
                </div>
              ) : (
                <p className='text-xl font-bold'>
                  No words generated yet. Start{' '}
                  <span className='text-pink-100'>{animatedText}</span>
                  <span className='animate-ping'>...</span>
                </p>
              )
            ) : (
              <p className='text-xl font-bold'>
                <span className='text-pink-100'>Generating</span>
                <span className='animate-ping'>...</span>
              </p>
            )}
          </div>

          <div className='bg-slate-50 rounded-lg p-6 text-purple-800'>
            {selectedWords.length > 0 ? (
              <div>
                <h3 className='text-2xl font-bold mb-4'>
                  {selectedWords[0].word}
                </h3>
                <p className='mb-2'>
                  <strong>Definition:</strong> {selectedWords[0].definition}
                </p>
                <p className='mb-2'>
                  <strong>Example Sentences:</strong>
                </p>
                <ul className='list-disc pl-5'>
                  {selectedWords[0].example_sentence.map((sentence, i) => (
                    <li key={i}>{sentence}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='flex justify-center'>
                <Image
                  src={ChatBot}
                  width={200}
                  height={200}
                  className='rounded-full'
                  alt='ChatBot'
                />
              </div>
            )}
          </div>
        </div>

        <h2 className='text-4xl font-bold mt-16 mb-8'>
          Let's practice <span className='text-pink-100'>Four Skills...</span>
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {skillImages.map((img) => (
            <button
              key={img.name}
              onClick={() => setSkill(img.name)}
              className='relative group'
            >
              <div className='relative overflow-hidden rounded-lg'>
                <Image
                  src={img.src}
                  width={200}
                  height={200}
                  alt={`${img.name} robot`}
                  className='w-full transition duration-300 ease-in-out group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 transition duration-300 ease-in-out group-hover:bg-opacity-20' />
              </div>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold'>
                {img.name}
              </p>
            </button>
          ))}
        </div>

        <div className='mt-8'>
          {skill === 'Listening' && <Listening text={text} setText={setText} />}
          {skill === 'Reading' && <Reading />}
          {skill === 'Writing' && <Writing words={words} />}
          {skill === 'Speaking' && <Speaking />}
        </div>
      </div>
    </main>
  )
}
