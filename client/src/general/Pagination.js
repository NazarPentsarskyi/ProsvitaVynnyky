import React from 'react';
import './pagination.css';

export const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <button className='page-button' onClick={() => paginate(number)} href='#'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
