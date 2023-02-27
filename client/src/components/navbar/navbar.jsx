import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='links'>
        <div className='link'><Link to="/"> Новини </Link></div>
        <div className='link'><Link to="/history"> Історія товариства </Link></div>
        
        <div className='link get'><Link to="/management" onMouseOver={()=>{setOpen(!open)}}> Керівні органи </Link></div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <div className='link-hidden'><Link to="/structure"> Структура </Link></div>
          <div className='link-hidden'><Link to="/decision"> Рішення </Link></div>
          <div className='link-hidden'><Link to="/documents"> Статутні документи </Link></div>
          <div className='link-hidden'><Link to="/government"> Актуальні рішення вищих керівних органів </Link></div>
        </div>
        <div className={`dropdown-menu-under ${open? 'active' : 'inactive'}`}>
          <div className='link'><Link to="/participation"> Участь у нарадах і заходах </Link></div>
          <div className='link'><Link to="/periodicals"> Періодика </Link></div>
          <div className='link'><Link to="/projects"> Проекти </Link></div>
          <div className='link'><Link to="/postspage"> Статті та дописи </Link></div>
          <div className='link'><Link to="/gallery"> Фотогалерея </Link></div>
        </div>
        <div className='link create'><Link to="/createnews"> Написати статтю </Link></div>
        <div className='link create'><Link to="/createpost"> Написати допис </Link></div>
      </div>
    </div>
  )
}
