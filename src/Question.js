import { useRef } from 'react'

export default function Question () {
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
    console.log('question', question)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{first} + {second} =</p>
      <input onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}