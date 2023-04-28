import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  content: {
    type: String,
    require: true,
  },
}, {
  timestamps: true,
});

export const ArticleModel = mongoose.model('articles', ArticleSchema);