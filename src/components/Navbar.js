import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue-grey">
            <Link className="brand-logo center" to='/'>Simple ToDo App</Link>
            <ul className="right">
                <li><NavLink to='/'>Home</NavLink>7</li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar