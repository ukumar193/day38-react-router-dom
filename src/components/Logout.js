import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
function Logout() {
  return (
    <div>
     <Navigation/>
     <h2>Sure! You want to Logout</h2>
     <Link to="/" className="ink">Yes</Link>
     <Link to="/home" className="ink">No</Link>
    </div>
  )
}

export default Logout