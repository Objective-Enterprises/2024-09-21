export default function Name (props) {
  function handleFirstChange (event) {
    props.setUser({
      ...props.user,
      firstName: event.target.value
    })
  }
  return (
    <>
      <h2>Name</h2>
      <p>First Name</p>
      <input
        value={props.user.firstName}
        onChange={handleFirstChange}
      />
      <p>Last Name</p>
      <input 
        value={props.user.lastName}
        onChange={(event) => {
          props.setUser({
            ...props.user,
            lastName: event.target.value
          })
        }}
      />
    </>
  )
}