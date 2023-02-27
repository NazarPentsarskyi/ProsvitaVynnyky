import React from 'react';
import { News } from "./News";

export const ArticlesMap = ({articles}) => {
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
