import React from 'react';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import Editor from "../../Editor";
import 'react-quill/dist/quill.snow.css';

export const CreateNews = () => {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createArticle(event) {
    const data = new FormData();
    data.set('title', title);
    data.set('description', description);
    data.set('content', content);
    event.preventDefault();

    await Axios.post('http://localhost:3001/createArticle', {
      title,
      description,
      content,
    })
    .then((response) => {
      setRedirect(true);
    })
  }

  if (redirect) {
    return <Navigate to="/" />
  }
  
  return (
    <form onSubmit={createArticle}>
      <div className='form'>
        <textarea type='text' 
          placeholder='Title...' 
          onChange={(event) => {setTitle(event.target.value)}}
        />
        <textarea type='text' 
          placeholder='Description...'
          onChange={(event) => {setDescription(event.target.value)}}
          />
        <Editor className='quill' value={content} onChange={setContent} />
        <button onClick={createArticle}>Create News</button>
      </div>
    </form>
  )
}
