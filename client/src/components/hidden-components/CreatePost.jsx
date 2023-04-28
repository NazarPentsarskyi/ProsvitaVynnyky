import React from 'react';
import './createNewsPost.css';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import Editor from '../../general/Editor';
import 'react-quill/dist/quill.snow.css';

export const CreatePost = () => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createPost(event) {
    const data = new FormData();
    data.set('title', title);
    data.set('content', content);
    event.preventDefault();

    await Axios.post('http://localhost:3001/createPost', {
      title,
      content,
    })
    .then((response) => {
      setRedirect(true);
    })
  }

  if (redirect) {
    return <Navigate to="/postspage" />
  }
  
  return (
    <form onSubmit={createPost}>
      <div className='form'>
      <label for='title'>Title of the post</label>
        <textarea type='text' 
          id='title' 
          placeholder='Title...'
          value=''
          rows='4'
          name='title'
          onChange={(event) => {setTitle(event.target.value)}}
        />
        <label for='postImg'>Image for the article</label>
        <input type='file'
          id='postImg'
          name='postImg'
        />
        <label for='postText'>Text of the post</label>
        <Editor className='quill' id='postText' name='postText' value={content} onChange={setContent} />
        <button onClick={createPost}>Create Post</button>
      </div>
    </form>
  )
}
