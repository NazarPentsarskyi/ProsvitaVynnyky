import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './gallery.css';

import img21 from './img/img21.jpg';
import img22 from './img/img22.jpg';
import img23 from './img/img23.jpg';


export const Gallery = () => {

  let dataCollection = [
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
  ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
  <div className='gallery'>
    <h2>Фотогалерея</h2>
    <div className={model ? 'model open' : 'model'}>
      <img src={tempImgSrc} alt=''/>
      <CloseIcon onClick={() => setModel(false)} />
    </div>
    <div className='gallery__content'>
      {dataCollection.map((item, index) => (
        <div className='gallery__item' key={index} onClick={() => getImg(item.imgSrc)}>
          <img src={item.imgSrc} alt='' style={{width: '100%'}} />
        </div>
        )
      )}
    </div>
  </div>
  )
}
