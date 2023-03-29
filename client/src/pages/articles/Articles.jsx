import React from 'react';
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export const Articles = ({_id,title,description,content,createdAt}) => {
  return (
    <div className='article_one'>
      <div className='article_one-item'>
        <Link to={`/articlepage/${_id}`}><h2>{title}</h2></Link>
        <time>{formatISO9075(new Date(createdAt))}</time>
        <h4>{description}</h4>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
      <Link to={`/articlepage/${_id}`}><button className='button'>Читати далі...</button></Link>
    </div>
  )
}
