import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

function CreatePost({ onPostCreated }) {
  const [text, setText] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https//linkedin-clone-two-lac.vercel.app/',
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setText('');
      onPostCreated(response.data); // Notify parent component
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;