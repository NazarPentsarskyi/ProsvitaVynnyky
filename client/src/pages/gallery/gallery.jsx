import React from 'react';
import { useState } from "react";
import { GalleryMap } from './galleryMap';
import { Pagination } from '../../general/Pagination.js';


export const Gallery = () => {

  let dataCollection = [
    {
      id: 1,
      imgSrc: 'https://live.staticflickr.com/65535/52784794268_6e6162c959_o.jpg',
    },
    {
      id: 2,
      imgSrc: 'https://live.staticflickr.com/65535/52784577324_6e3d070a5b_o.jpg',
    },
    {
      id: 3,
      imgSrc: 'https://live.staticflickr.com/65535/52784577319_b536746ffc_o.jpg',
    },
    {
      id: 4,
      imgSrc: 'https://live.staticflickr.com/65535/52784339366_d6a3bf2d93_o.jpg',
    },
    {
      id: 5,
      imgSrc: 'https://live.staticflickr.com/65535/52784736130_f5c3197f2e_o.jpg',
    },
    {
      id: 6,
      imgSrc: 'https://live.staticflickr.com/65535/52783787652_7c6f4d1c7d_o.jpg',
    },
    {
      id: 7,
      imgSrc: 'https://live.staticflickr.com/65535/52784577259_b04936a5e6_o.jpg',
    },
    {
      id: 8,
      imgSrc: 'https://live.staticflickr.com/65535/52783787622_480ed089ce_o.jpg',
    },
    {
      id: 9,
      imgSrc: 'https://live.staticflickr.com/65535/52784577244_c987e9c3f0_o.jpg',
    },
    {
      id: 10,
      imgSrc: 'https://live.staticflickr.com/65535/52784736085_c657976d13_o.jpg',
    },
    {
      id: 11,
      imgSrc: 'https://live.staticflickr.com/65535/52784736075_8a080e0dee_o.jpg',
    },
    {
      id: 12,
      imgSrc: 'https://live.staticflickr.com/65535/52784794153_a0b6968ba2_o.jpg',
    },
    {
      id: 13,
      imgSrc: 'https://live.staticflickr.com/65535/52784577194_1da0693164_o.jpg',
    },
    {
      id: 14,
      imgSrc: 'https://live.staticflickr.com/65535/52784577184_5a82c25842_o.jpg',
    },
    {
      id: 15,
      imgSrc: 'https://live.staticflickr.com/65535/52784339186_dd734fb23c_o.jpg',
    },
    {
      id: 16,
      imgSrc: 'https://live.staticflickr.com/65535/52784794113_99faa33b94_o.jpg',
    },
    {
      id: 17,
      imgSrc: 'https://live.staticflickr.com/65535/52783787507_9ce4bc8e9b_o.jpg',
    },
    {
      id: 18,
      imgSrc: 'https://live.staticflickr.com/65535/52784794093_73e553cee6_o.jpg',
    },
    {
      id: 19,
      imgSrc: 'https://live.staticflickr.com/65535/52784339146_26ed261114_o.jpg',
    },
    {
      id: 20,
      imgSrc: 'https://live.staticflickr.com/65535/52783787457_38bcc5a12f_o.jpg',
    },
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);

  const indexOfLastArticle = currentPage * imagesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - imagesPerPage;
  const currentImages = dataCollection.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <GalleryMap dataCollection={currentImages} />
      <Pagination
      articlesPerPage={imagesPerPage}
      totalArticles={dataCollection.length}
      paginate={paginate}
    />
    </div>
  )
}
