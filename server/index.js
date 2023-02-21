const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ArticleModel = require('./models/Articles');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = 3001;
const db  = 'mongodb+srv://ProsvitaVynnyky:Prosvita_1868_Vynnyky@cluster0.xm2knup.mongodb.net/ProsvitaDB?retryWrites=true&w=majority';

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => console.log('Connected to DB'))
.catch((error) => console.log(error));

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
  const postDoc = await ArticleModel.create({
    title,
    description,
    content,})
  res.json(postDoc);
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`SERVER RUNS! Listening port ${PORT}`)
});