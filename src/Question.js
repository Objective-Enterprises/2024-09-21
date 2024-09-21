import { useRef, useState } from 'react'

export default function Question (props) {

  // const [answer, setAnswer] = useState('')
  const answer = useRef()
  function handleChange (event) {
    // setAnswer(event.target.value)
    answer.current = event.target.value
  }

  const first = Math.ceil(Math.random() * 10)
  const second = Math.ceil(Math.random() * 10)

  function handleSubmit (event) {
    event.preventDefault()
    const total = first + second
    const answerNumber = Number(answer.current)
    const correct = answerNumber === total
    const question = {
      first, second, answer: answerNumber, correct
    }
    const newQuestions = [...props.questions, question]
    props.setQuestions(newQuestions)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Question</h2>
      <p>{first} + {second} =</p>
      <input onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}