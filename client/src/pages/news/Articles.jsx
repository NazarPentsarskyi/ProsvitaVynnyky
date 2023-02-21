import React from 'react';
import { News } from "./news";

export const Articles = ({articles}) => {
  return (
    <div className='news'>
      {articles.length > 0 && articles.map(article => (
        <div key={article._id}>
          <News {...article}/>
        </div>
      ))}
    </div>
  )
}
