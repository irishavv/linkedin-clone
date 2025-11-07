import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import PostFeed from '../components/PostFeed';

function HomePage() {
  // State to trigger a refresh of the post feed
  const [newPost, setNewPost] = useState(null);

  const handlePostCreated = (post) => {
    setNewPost(post);
  };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '700px', margin: '20px auto', padding: '0 20px' }}>
        <CreatePost onPostCreated={handlePostCreated} />
        <PostFeed newPost={newPost} />
      </div>
    </div>
  );
}

export default HomePage;