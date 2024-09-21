import Quiz from "./Quiz";
import { useState } from "react";

function App() {
  const [name, setName] = useState('dorothy')
  function handleChange (event) {
    setName(event.target.value)
  }
  return (
    <>
      <h1>Quiz App ({name})</h1>
      <p>What is your name?</p>
      <input value={name} onChange={handleChange} />
      <Quiz />
    </>
  )
}

export default App;
