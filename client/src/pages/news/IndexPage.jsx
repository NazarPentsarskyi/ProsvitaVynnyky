import { Posts } from "./Posts";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Pagination } from './Pagination.js';


export const IndexPage = () => {

  const [posts,setPosts] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    Axios.get('http://localhost:3001/getArticles')
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
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

//posts={currentPosts}