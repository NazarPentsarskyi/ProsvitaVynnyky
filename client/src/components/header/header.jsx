import React from 'react';
import logo from '../../images/prosvita_vynnyky_logo.png';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt='prosvita-vynnyky'/>
      </Link>
    </header>
  )
}
