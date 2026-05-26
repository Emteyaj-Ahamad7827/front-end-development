import { blogModel } from '../model/Blog.model.js';

const createBlog = async (req, res) => {
  if (req.body) {
    const blogData = await blogModel.create(req.body);
    res.send(blogData);
  } else {
    res.send('please enter any thing in body');
  }
};
const deleteBlog = async (req, res) => {
  console.log(`🚀 ~ req.params:`, req.params);
  if (req.params) {
    const data = await blogModel.deleteOne(req.params);
    // const data = await blogModel.findByIdAndDelete(req.params);
    res.send({
      msg: `data has been deleted`,
      data,
      id: req.params,
    });
  }
  res.send('something went wrong...');
};
const updateOneBlog = () => {};
const updateManyBlog = () => {};

export { createBlog, deleteBlog, updateManyBlog, updateOneBlog };