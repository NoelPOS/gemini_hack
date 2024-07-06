import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import readingRobot from '../../assets/img/readingRobot.png'

interface Props {
  start: boolean
  setStart: Dispatch<SetStateAction<boolean>>
}

const WritingFirst = (props: Props) => {
  return (
    <div className='text-white bg-purple-200 flex items-center justify-center w-full '>
      <div className='flex flex-row gap-20 items-center justify-center py-8'>
        <div className='flex flex-col gap-2 items-center justify-center '>
          <Image
            src={readingRobot}
            width={200}
            height={200}
            alt='Picture of the author'
          />
          <button
            className='btn bg-purple-900 px-2 rounded-lg px-8 py-2'
            onClick={() => props.setStart(false)}
          >
            Start
          </button>
        </div>
        <div className='flex items-center justify-center   bg-purple-400 w-[500px] h-[250px] border-2 rounded-tr-3xl rounded-bl-3xl border-pink-400'>
          <p className='text-center'>
            AI will now ask you a few questions to practice the words that
            you’ve learned today!
          </p>
        </div>
      </div>
    </div>
  )
}

export default WritingFirst
