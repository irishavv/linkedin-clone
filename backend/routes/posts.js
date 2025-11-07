const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', authMiddleware, createPost);

// @route   GET api/posts
// @desc    Get all posts
// @access  Public (or private if you want only logged-in users to see)
router.get('/', getAllPosts);

module.exports = router;