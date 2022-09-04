import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="logo-div">
            <i className="logo fa-brands fa-github"></i>
            <p><Link to="/">GithubFinder</Link></p>
            </div>
            <div className="nav-list">
            <div className="home-div">
                <i className="home fa-solid fa-house-chimney"></i>
                <p><Link to="/">Home</Link></p>
            </div>
            <div className="about-div">
            <i className="about fa-solid fa-info"></i>
            <p><Link to="/about">About</Link></p>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
