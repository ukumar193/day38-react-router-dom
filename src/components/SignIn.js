import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div>
     <form>
     <div>
      <label>FirstName</label>
      <input></input>
      </div>
      <div>
      <label>Last Name</label>  
      <input></input> 
      </div>
      <div>
     <label className=''>DateofBirth</label>
     <input type='date'></input>
     </div>
     <div>
     <label>Email</label>
     <input type='email'></input>
     </div>
     <div>
     <label>PassWord</label>
     <input type='password'></input>
     </div>
     <div>
     <label>profile pic</label>
     <input type='file'></input>
     </div>
     
     <Link to="/" className='bn1'>Login</Link>
     </form>
  
    </div>
  )
}

export default SignIn