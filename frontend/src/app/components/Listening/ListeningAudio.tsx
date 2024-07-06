import React from 'react'
import Image from 'next/image'
import mainRobot from '../../assets/img/mainRobot.png'

const ListeningAudio = () => {
  return (
    <div className='text-white bg-purple-200 flex items-center justify-center w-full h-[66vh]'>
      <div className='flex flex-row gap-20 items-center justify-center py-8'>
        <div className='flex flex-col gap-2 items-center justify-center '>
          <Image
            src={mainRobot}
            width={200}
            height={200}
            alt='Picture of the author'
          />
          <button className='btn bg-pink-100 px-2 rounded-lg px-6 py-2'>
            Take A Quiz
          </button>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center   bg-purple-400 w-[500px] h-[300px] border-2 rounded-tr-3xl rounded-bl-3xl border-pink-200 px-10'>
          <audio controls src='' />
          <p className='text-center bg-white text-black p-10 py-20 rounded-xl '>
            Well done User! Your writing has been improved!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ListeningAudio
