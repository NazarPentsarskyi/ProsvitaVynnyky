import React from 'react';
import { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const PostPage = () => {

  const [postInfo,setPostInfo] = useState(null); 
  const {id} = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/postpage/${id}`)
      .then(postInfo => {
        setPostInfo(postInfo.data);
      });
    }, [id]);

  if (!postInfo) return '';

  return (
    <div>
      <Link to={`/postspage`}><button className="post-button">... назад</button></Link>
      <div className="post">
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
      </div>
    </div>
  );
}