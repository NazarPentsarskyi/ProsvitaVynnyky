import React from 'react';
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div className='link'><Link to="/"> Новини </Link></div>
        <div className='link'><Link to="/history"> Історія товариства </Link></div>
        <div className='link'><Link to="/projects"> Проекти </Link></div>
        <div className='link'><Link to="/journals"> Часопис </Link></div>
        <div className='link'><Link to="/about"> Про товариство </Link></div>
        <div className='link create'><Link to="/createnews"> Написати статтю </Link></div>
      </div>
    </div>
  )
}
