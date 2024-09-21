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
    console.log('answer.current', answer.current)
    const total = first + second
    console.log('total', total)
    const answerNumber = Number(answer.current)
    console.log('answerNumber', answerNumber)
    const correct = answerNumber === total
    console.log('correct', correct)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{first} + {second} =</p>
      <input onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}