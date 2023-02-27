import React from 'react';
import { PostsMap } from "./PostsMap";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Pagination } from '../../general/Pagination.js';

export const PostsPage = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    Axios.get('http://localhost:3001/getPosts')
      .then(posts => {
          setPosts(posts.data);
        });
  }, []);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <PostsMap posts={currentPosts} />
      <Pagination
        articlesPerPage={postsPerPage}
        totalArticles={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
