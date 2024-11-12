import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
     <form>
      <div>
      <label>User Name or email</label>
      <input></input>
      </div>
      <div>
      <label>Password</label>
      <input></input>
      </div>
      <Link to="/home" className='bn2'>login</Link>
      <p>New User ? Create an account</p>
      <Link to="/signin" className='bn1'>SignIn</Link>
      
     </form>
    </div>
  )
}

export default Login