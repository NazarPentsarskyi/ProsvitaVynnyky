import React from 'react';
import { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const ArticlePage = () => {

  const [articleInfo,setArticleInfo] = useState(null); 
  const {id} = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/articlepage/${id}`)
      .then(articleInfo => {
        setArticleInfo(articleInfo.data);
      });
    }, [id]);

  if (!articleInfo) return '';

  return (
    <div>
      <Link to={`/`}><button className="post-button">... назад</button></Link>
      <div className="post">
        <h1>{articleInfo.title}</h1>
        <time>{formatISO9075(new Date(articleInfo.createdAt))}</time>
        <h4>{articleInfo.description}</h4>
        <div dangerouslySetInnerHTML={{__html:articleInfo.content}} />
      </div>
    </div>
  );
}