import React from 'react';

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
            <button className='page-item' onClick={() => paginate(number)} href='#'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
