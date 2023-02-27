import React from 'react';
import { Posts } from "./Posts";

export const PostsMap = ({posts}) => {
  return (
    <div className='news'>
      {posts.length > 0 && posts.map(post => (
        <div key={post._id}>
          <Posts {...post}/>
        </div>
      ))}
    </div>
  )
}
