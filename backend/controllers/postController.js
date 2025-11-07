const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
  const { text } = req.body;

  try {
    const newPost = new Post({
      text,
      user: req.user.id, // Comes from the auth middleware
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    // Sort by most recent
    const posts = await Post.find().populate('user', ['name']).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};