import React from 'react';
import { Articles } from "./Articles";

export const ArticlesMap = ({articles}) => {
  return (
    <div className='articles_map'>
      {articles.length > 0 && articles.map(article => (
        <div key={article._id}>
          <Articles {...article}/>
        </div>
      ))}
    </div>
  )
}
