import React from 'react';
import { ArticlesMap } from "./ArticlesMap";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Pagination } from '../../general/Pagination.js';

export const NewsPage = () => {

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);

  useEffect(() => {
    Axios.get('http://localhost:3001/getArticles')
      .then(articles => {
          setArticles(articles.data);
        });
  }, []);
  
  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <ArticlesMap articles={currentArticles} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
}
