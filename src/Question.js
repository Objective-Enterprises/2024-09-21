import { useState } from 'react'

export default function Question () {
  const [answer, setAnswer] = useState('')
  const first = Math.ceil(Math.random() * 10)
  const second = Math.ceil(Math.random() * 10)
  function handleChange (event) {
    setAnswer(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    const correct = false
    console.log('correct', correct)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{first} + {second} =</p>
      <input value={answer} onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}