import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ArticleModel } from "./models/Article.js";
import { PostModel } from "./models/Post.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;
const db  = 'mongodb+srv://ProsvitaVynnyky:Prosvita_1868_Vynnyky@cluster0.xm2knup.mongodb.net/ProsvitaDB?retryWrites=true&w=majority';

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => console.log('Connected to DB'))
.catch((error) => console.log(error));

//articles
app.get('/getArticles', async (req, res) => {
  res.json(
    await ArticleModel.find()
      .sort({createdAt: -1})
      .limit(10)
  );
});

app.get('/articlepage/:id', async (req, res) => {
  const {id} = req.params;
  const articleDoc = await ArticleModel.findById(id);
  res.json(articleDoc);
})

app.post('/createArticle', async (req, res) => {
  const {title, description, content} = req.body;
  const articleDoc = await ArticleModel.create({
    title,
    description,
    content,})
  res.json(articleDoc);
});

//posts
app.get('/getPosts', async (req, res) => {
  res.json(
    await PostModel.find()
      .sort({createdAt: -1})
      .limit(10)
  );
});

app.get('/postpage/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await PostModel.findById(id);
  res.json(postDoc);
})

app.post('/createPost', async (req, res) => {
  const {title, content} = req.body;
  const postDoc = await PostModel.create({
    title,
    content,})
  res.json(postDoc);
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`SERVER RUNS! Listening port ${PORT}`)
});