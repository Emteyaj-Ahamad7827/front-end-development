import express from 'express';

import {
  createBlog,
  deleteBlog,
  updateManyBlog,
  updateOneBlog,
} from '../Controller/blogData.js';

const blogRoutes = express.Router();

blogRoutes.get('/', (req, res) => {
  res.send("all blog's");
});

// /blog/createBlog

blogRoutes.use('/createBlog', createBlog);

// /blog/deleteBlog
blogRoutes.use('/deleteBlog', deleteBlog);

// /blog/updateOneBlog
blogRoutes.use('/updateOneBlog', updateOneBlog);

// /blog/updateManyBlog
blogRoutes.use('/updateManyBlog', updateManyBlog);

export { blogRoutes };