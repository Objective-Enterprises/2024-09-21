import { useState } from "react"
import Question from "./Question"

export default function Quiz (props) {
  const [ready, setReady] = useState(false)
  if (ready) {
    return (
      <Question
        questions={props.questions}
        setQuestions={props.setQuestions}
      />
    )
  }

  function handleReady () {
    setReady(true)
  }

  return (
    <>
      <p>Are you ready to start the quiz?</p>
      <button onClick={handleReady}>Ready!!!</button>
    </>
  )
}