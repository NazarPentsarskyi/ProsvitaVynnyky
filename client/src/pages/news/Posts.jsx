import React from 'react';
import { News } from "./news";

export const Posts = ({posts}) => {
  return (
    <div className='news'>
      {posts.length > 0 && posts.map(post => (
        <div key={post._id}>
          <News {...post}/>
        </div>
      ))}
    </div>
  )
}
