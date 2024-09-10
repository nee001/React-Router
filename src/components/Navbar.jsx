import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">React Router</div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul> 
    </nav>
  )
}

export default Navbar
