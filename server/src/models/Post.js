import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title:{
    type: String,
    require: true,
  },
  content:{
    type: String,
    require: true,
  },
}, {
  timestamps: true,
});

export const PostModel = mongoose.model('posts', PostSchema);
