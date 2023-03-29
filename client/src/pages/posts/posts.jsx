import React from 'react';
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export const Posts = ({_id,title,content,createdAt}) => {
  return (
    <div className='post_one'>
      <div className='post_one-item'>
        <Link to={`/postpage/${_id}`}><h2>{title}</h2></Link>
        <time>{formatISO9075(new Date(createdAt))}</time>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
      <Link to={`/postpage/${_id}`}><button className='button'>Читати далі...</button></Link>
    </div>
  )
}
