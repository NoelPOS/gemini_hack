import React from 'react'
import { useState } from 'react'
import WordList from './Writing/WordList'
import WritingFirst from './Writing/WritingFirst'
import WritingPractice from './Writing/WritingPractice'

type Props = {}

function Writing({}: Props) {
  const [start, setStart] = useState(false)
  const [practice, setPractice] = useState(true)
  return (
    (start && <WritingFirst start={start} setStart={setStart} />) ||
    (practice && (
      <WritingPractice practice={practice} setPractice={setPractice} />
    ))
  )
}

export default Writing
