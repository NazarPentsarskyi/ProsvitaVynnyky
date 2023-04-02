import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './gallery.css';

export const GalleryMap = ({dataCollection}) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }
  
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( dataCollection.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }
  
  const nextSlide = () => {
    slideNumber + 1 === dataCollection.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }
  
  return (
  <div className='gallery'>
    <h2>Фотогалерея</h2>
    <div className={openModal ? 'model open' : 'model'}>
      <CloseIcon className='closeIcon' onClick={handleCloseModal} />
      <ArrowBackIosNewIcon className='prevIcon' onClick={prevSlide} />
      <img src={dataCollection[slideNumber].imgSrc} alt='' />
      <ArrowForwardIosIcon className='nextIcon' onClick={nextSlide} />
    </div>
    <div className='gallery__content'>
      {dataCollection && dataCollection.map((slide, index) => (
        <div className='gallery__item' key={index} onClick={ () => handleOpenModal(index)}>
          <img src={slide.imgSrc} alt='' style={{width: '100%', height: '360px'}} />
        </div>
        )
      )}
    </div>
  </div>
  )
}
