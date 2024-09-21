export default function Name (props) {
  function handleChange (event) {
    props.setName(event.target.value)
  }
  return (
    <>
      <h2>Name</h2>
      <p>What is your name?</p>
      <input
        value={props.name}
        onChange={handleChange}
      />
    </>
  )
}