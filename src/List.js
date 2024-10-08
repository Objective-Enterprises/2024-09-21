import './style.css'

export default function List (props) {
  // const questions = [
  //   { first: 1, second: 9, answer: 10, correct: true },
  //   { first: 1, second: 5, answer: 6, correct: true },
  //   { first: 3, second: 10, answer: 15, correct: false },
  //   { first: 0, second: 0, answer: 0, correct: true },
  // ]

  const rows = props.questions.map((answer, index) => {
    const correct = answer.correct ? 'Yes' : 'No'
    // const color = answer.correct
    //   ? 'green'
    //   : 'red'
    // const style = { color }
    return (
      <tr
        key={index}
        className={answer.correct ? 'correct' : 'incorrect'}
      >
        <td>{answer.first}</td>
        <td>{answer.second}</td>
        <td>{answer.answer}</td>
        <td>{correct}</td>
      </tr>
    )
  })

  return (
    <>
      <h2>List</h2>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Second</th>
            <th>Answer</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )
}