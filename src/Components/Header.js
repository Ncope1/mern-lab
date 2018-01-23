import React from 'react'
import {
    Route,
    Link, 
    Switch
  } from 'react-router-dom'

const Header = () => (
<div className="card-panel purple accent-1">
<nav className="purple accent-1">
    <ul className="left hide-on-med-and-down">
        <li>
            <Link to = '/home' className="navbar-brand">Home</Link>
        </li>
        <li>
            <Link to = "/routines">Routines</Link>
        </li>

    </ul>
</nav>
</div>
)

export default Header