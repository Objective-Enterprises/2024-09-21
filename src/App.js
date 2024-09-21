import Quiz from "./Quiz";
import List from './List';
import Name from "./Name";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([])
  console.log('questions', questions)

  const [name, setName] = useState('dorothy')
  const [lastName, setLastName] = useState('parker')

  return (
    <>
      <h1>Quiz App ({name})</h1>
      <Name name={name} setName={setName} />
      <Quiz
        questions={questions}
        setQuestions={setQuestions}
      />
      <List questions={questions} />
    </>
  )
}

export default App;
