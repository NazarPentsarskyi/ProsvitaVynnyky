import React from 'react';
import { useState } from "react";
import { GalleryMap } from './galleryMap';
import { Pagination } from '../../general/Pagination.js';
import photoCollection from './photoCollection.json';


export const Gallery = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);

  const indexOfLastArticle = currentPage * imagesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - imagesPerPage;
  const currentImages = photoCollection.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <GalleryMap photoCollection={currentImages} />
      <Pagination
      articlesPerPage={imagesPerPage}
      totalArticles={photoCollection.length}
      paginate={paginate}
    />
    </div>
  )
}
