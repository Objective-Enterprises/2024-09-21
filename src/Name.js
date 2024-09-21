export default function Name (props) {
  function handleUserChange (event) {
    // user[key] = value
    props.setUser({
      ...props.user,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <h2>Name</h2>
      <p>First Name</p>
      <input
        name='firstName'
        value={props.user.firstName}
        onChange={handleUserChange}
      />
      <p>Last Name</p>
      <input 
        name='lastName'
        value={props.user.lastName}
        onChange={handleUserChange}
      />
    </>
  )
}