import React from 'react';
import './createNewsPost.css';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import Editor from '../../general/Editor';
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
    <form onSubmit={createArticle} enctype="multipart/form-data">
      <div className='form'>
        <label for='title'>Title of the article</label>
        <textarea type='text'
          id='title' 
          placeholder='Title...'
          value=''
          rows='4'
          name='title'
          onChange={(event) => {setTitle(event.target.value)}}
        />
        <label for='description'>Article description</label>
        <textarea type='text'
          id='description'
          placeholder='Description...'
          value=''
          rows='8'
          name='description'
          onChange={(event) => {setDescription(event.target.value)}}
        />
        <label for='articleImg'>Image for the article</label>
        <input type='file'
          id='articleImg'
          name='articleImg'
        />
        <label for='articleText'>Text of the article</label>
        <Editor className='quill' id='articleText' name='articleText' value={content} onChange={setContent} />
        <button onClick={createArticle}>Create News</button>
      </div>
    </form>
  )
}
