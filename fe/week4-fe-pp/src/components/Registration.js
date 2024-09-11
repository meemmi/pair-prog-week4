import React from 'react'

function Registration() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label htmlFor="fullname">Name:</label>
        <input type="text" id="fullname"></input>

        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email"></input>

        <label htmlFor="address">Post Address:</label>
        <input type="text" id="address"></input>
      </form>
    </div>
  )
}

export default Registration
