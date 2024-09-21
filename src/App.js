import Quiz from "./Quiz";
import List from './List';
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([])
  console.log('questions', questions)

  const [name, setName] = useState('dorothy')
  function handleChange (event) {
    setName(event.target.value)
  }
  return (
    <>
      <h1>Quiz App ({name})</h1>
      <p>What is your name?</p>
      <input value={name} onChange={handleChange} />
      <Quiz
        questions={questions}
        setQuestions={setQuestions}
      />
      <List questions={questions} />
    </>
  )
}

export default App;
