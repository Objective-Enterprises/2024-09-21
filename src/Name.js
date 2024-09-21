export default function Name (props) {
  function handleUserChange (key, event) {
    // user[key] = value
    props.setUser({
      ...props.user,
      [key]: event.target.value
    })
  }
  function handleFirstChange (event) {
    // props.setUser({
    //   ...props.user,
    //   firstName: event.target.value
    // })
    handleUserChange('firstName', event)
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
        onChange={(event) => handleUserChange('lastName', event)}
      />
    </>
  )
}