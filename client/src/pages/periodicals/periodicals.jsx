import React from 'react';
import './periodicals.css';
import journal_5_2012 from '../../images/prosvita_vynnyky_05_2012.png';
import journal_7_2015 from '../../images/prosvita_vynnyky_07_2015.png';
import journal_8_2022 from '../../images/prosvita_vynnyky_08_2022.png';

export const Periodicals = () => {
  return (
    <div className='periodicals'>
      <a href="https://drive.google.com/file/d/1ykJkGLx3dRANtMLE4PZ8wDT_q2LKQwNq/view?usp=share_link" target='_blank' rel="noreferrer">
        <img src={journal_5_2012} alt='prosvita_vynnyky_#05_2012'/>
      </a>
      <a href="https://drive.google.com/file/d/1VG79qNnY3FxR70y50G9u73KVFC6g1Gtg/view?usp=share_link" target='_blank' rel="noreferrer">
        <img src={journal_7_2015} alt='prosvita_vynnyky_#07_2015'/>
      </a>
      <a href="https://drive.google.com/file/d/1kkFybd4Kg4YYNrP-JZ0MQg1JVnZHjnG1/view?usp=sharing" target='_blank' rel="noreferrer">
        <img src={journal_8_2022} alt='prosvita_vynnyky_#08_2022'/>
      </a>
    </div>
  )
}
