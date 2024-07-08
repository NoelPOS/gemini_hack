import React from 'react'
import { useState } from 'react'
import WordList from './Writing/WordList'
import WritingFirst from './Writing/WritingFirst'
import WritingSummary from './Writing/WritingSummary'
import WritingQuestion from './Writing/WritingQuestion'

type Props = {}

function Writing({}: Props) {
  const [start, setStart] = useState(true)
  const [practice, setPractice] = useState(false)
  const [summary, setSummary] = useState(false)
  return (
    (start && (
      <WritingFirst
        start={start}
        setStart={setStart}
        practice={practice}
        setPractice={setPractice}
      />
    )) ||
    (practice && (
      <WritingQuestion
        practice={practice}
        setPractice={setPractice}
        summary={summary}
        setSummary={setSummary}
      />
    )) ||
    (summary && <WritingSummary />)
  )
}

export default Writing
