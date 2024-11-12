import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nn1'>
      <Link to="/home" className='nav'>home</Link>
      <Link to="/service"className='nav'>Service </Link>
      <Link to="/about" className='nav'>About</Link>
      <Link to="/profile" className='nav'>Profile</Link>
      <Link to="/logout" className='nav'>LogOut</Link>
      

    </nav>
  );
}

export default Navigation