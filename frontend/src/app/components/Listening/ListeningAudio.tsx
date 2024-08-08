import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import mainRobot from '../../assets/img/mainRobot.png'

import axios from 'axios'

interface Props {
  text: string
  setText: Dispatch<SetStateAction<string>>
  practice: boolean
  setPractice: Dispatch<SetStateAction<boolean>>
  survey: boolean
  setSurvey: Dispatch<SetStateAction<boolean>>
}

async function something(str: string) {
  const input = str
  const response = await axios.post('http://localhost:3001/synthesize', {
    input,
  })
  const result = `data:audio/mp3;base64,${response.data.audioContent}`
  return result
}

const ListeningAudio = (props: Props) => {
  const [audioSrc, setAudioSrc] = React.useState('')
  const [para, setPara] = React.useState(props.text)

  useEffect(() => {
    const fetchData = async () => {
      console.log(para)
      const result = await something(para)
      setAudioSrc(result)
    }

    fetchData()
  }, [])

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
          <button
            onClick={() => {
              props.setPractice(false)
              props.setSurvey(true)
            }}
            className='btn bg-pink-100 px-2 rounded-lg px-6 py-2'
          >
            Take A Quiz
          </button>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center   bg-purple-400 w-[500px] h-[300px] border-2 rounded-tr-3xl rounded-bl-3xl border-pink-200 px-10'>
          <audio controls src={audioSrc} />
          <p className='text-center bg-white text-black p-10 py-20 rounded-xl '></p>
        </div>
      </div>
    </div>
  )
}

export default ListeningAudio
