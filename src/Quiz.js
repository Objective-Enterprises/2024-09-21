import { useState } from "react"
import Question from "./Question"

export default function Quiz () {
  const [ready, setReady] = useState(false)
  if (ready) {
    return <Question />
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