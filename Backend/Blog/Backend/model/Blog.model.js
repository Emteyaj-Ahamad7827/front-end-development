import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    title: String,
    discription: String,
    // img pending [ multer explaination require]
    category: String, // sort by
    rating: Number, // filter by
  },
  {
    versionKey: false,
  },
);

export const blogModel = mongoose.model('Blog', blogSchema);