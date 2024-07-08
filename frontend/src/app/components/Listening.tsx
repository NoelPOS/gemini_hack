import React from 'react'
import { useState } from 'react'
import ListeningAudio from './Listening/ListeningAudio'
import ListeningFirst from './Listening/ListeningFirst'
import ListeningQuiz from './Listening/ListeningQuiz'
import ListeningSummary from './Listening/ListeningSummary'

type Props = {}

function Listening({}: Props) {
  const [start, setStart] = useState(true)
  const [practice, setPractice] = useState(false)
  const [survey, setSurvey] = useState(false)
  const [summary, setSummary] = useState(false)
  return (
    (start && (
      <ListeningFirst
        start={start}
        setStart={setStart}
        practice={practice}
        setPractice={setPractice}
      />
    )) ||
    (practice && (
      <ListeningAudio
        practice={practice}
        setPractice={setPractice}
        survey={survey}
        setSurvey={setSurvey}
      />
    )) ||
    (survey && (
      <ListeningQuiz
        survey={survey}
        setSurvey={setSurvey}
        summary={summary}
        setSummary={setSummary}
      />
    )) ||
    (summary && <ListeningSummary />)
  )
}

export default Listening
