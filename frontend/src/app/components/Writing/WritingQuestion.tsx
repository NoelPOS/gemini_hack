import React, { Dispatch, SetStateAction } from 'react'
import WordList from './WordList'
import Question from './Question'
import TextInputArea from './TextInputArea'
import AiFeedback from './AiFeedback'

interface Props {
  practice: boolean
  setPractice: Dispatch<SetStateAction<boolean>>
  summary: boolean
  setSummary: Dispatch<SetStateAction<boolean>>
}

const WritingQuestion = (props: Props) => {
  return (
    <>
      <div className='mt-5'>
        <div className='flex items-center justify-center gap-5'>
          <WordList />
          <Question />
        </div>
        <div className='mt-5 flex flex-col gap-2'>
          <TextInputArea />
          <div>
            <div className='bg-purple-400 h-[370px] w-[730px] p-2 rounded-xl'>
              <p className='font-bold text-2xl text-center pb-2 text-white'>
                {' '}
                AI Feedback{' '}
              </p>
              <textarea
                className='h-[130px] w-[700px] rounded-xl bg-white pl-2 pt-3 mb-3 ml-1'
                placeholder='Type your feedback on the generative AI'
              ></textarea>
              <textarea
                className='h-[90px] w-[700px] rounded-xl bg-white pl-2 pt-3 ml-1'
                placeholder='Suggestion'
              ></textarea>
              <div className='flex justify-end mt-1'>
                <button
                  onClick={() => {
                    props.setPractice(false)
                    props.setSummary(true)
                  }}
                  className='mt-2 bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white'
                >
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WritingQuestion
