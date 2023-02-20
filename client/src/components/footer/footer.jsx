import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/">
        <p>
          Винниківське міське товариство "Просвіта" ім. Т.Шевченка
        </p>
      </Link>
      <p>
        © 2023. Всі права захищені.
      </p>
    </div>
  )
}
