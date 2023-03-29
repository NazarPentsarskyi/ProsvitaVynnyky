import React from 'react';
import './periodicals.css';
import journal_8_2022 from '../../images/prosvita_vynnyky_08_2022.png';

export const Periodicals = () => {
  return (
    <div className='periodicals'>
      <a href="https://drive.google.com/file/d/1kkFybd4Kg4YYNrP-JZ0MQg1JVnZHjnG1/view?usp=sharing" target='_blank' rel="noreferrer">
        <img src={journal_8_2022} alt='prosvita_vynnyky_#08_2022'/>
      </a>
    </div>
  )
}
