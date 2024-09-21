import { useState } from "react"

export default function Quiz () {
  const [ready, setReady] = useState(false)
  if (ready) {
    return (
      <input />
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