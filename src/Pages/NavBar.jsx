import { Link } from 'react-router-dom'

import '../styles/main.css'

import React from 'react'

const NavBar = () => {
    return (
      <nav className="navbar links">
        
        <Link to="/home"> Posts </Link>
       <Link to="/register">Register</Link>
       <Link to="/login">Login</Link>
       <Link to="/postList">PostList</Link>
       <Link to="/">Welcome</Link>
       <Link to="/userposts/:userid">UserPost</Link>
      <Link to="/create">New Post</Link>
        
      </nav>
    )
}

export default NavBar;


