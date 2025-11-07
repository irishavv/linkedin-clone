import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostFeed.css';

function PostFeed({ newPost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://linkedin-clone-two-lac.vercel.app/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);
  
  // Add new post to the top of the feed when it's created
  useEffect(() => {
    if (newPost) {
      // Re-fetch posts to get the populated user name
      const fetchPosts = async () => {
        const response = await axios.get('http://linkedin-clone-two-lac.vercel.app/api/posts');
        setPosts(response.data);
      };
      fetchPosts();
    }
  }, [newPost]);


  return (
    <div className="post-feed-container">
      <h2>Feed</h2>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h4>{post.user ? post.user.name : 'Anonymous'}</h4>
          <p>{post.text}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default PostFeed;