const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
}, {
  timestamps: true,
});

const ArticleModel = mongoose.model('articles', ArticleSchema);
module.exports = ArticleModel;