import Quiz from "./Quiz";
import List from './List';
import Name from "./Name";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([])
  console.log('questions', questions)

  const [user, setUser] = useState({
    firstName: 'dorothy',
    lastName: 'parker'
  })

  return (
    <>
      <h1>
        Quiz App ({user.firstName} {user.lastName})
      </h1>
      <Name user={user} setUser={setUser} />
      <Quiz
        questions={questions}
        setQuestions={setQuestions}
      />
      <List questions={questions} />
    </>
  )
}

export default App;
