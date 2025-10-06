import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';
import { errorHandler } from './errorHandler.js';
import fs from 'fs';
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log('conected to databaase');
  })
  .catch((error) => {
    console.log('error conecting to database:', error.message);
  });

const usersSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const postsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});
const user = mongoose.model('user', usersSchema);
const post = mongoose.model('post', postsSchema);

app.post('/posts', async (req, res, next) => {
  try {
    const newPost = req.body;
    await post.create(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});
app.post('/users', async (req, res, next) => {
  try {
    const newUser = req.body;
    await user.create(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});
app.get('/posts', async (req, res, next) => {
  try {
    const islean = req.query.islean;
    if (islean) {
      const posts = await post.find({}).populate('auther').lean();
      res.json(posts);
    }
    const posts = await post.find({});
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

app.get('/posts/export', async (req, res, next) => {
  try {
    const writeStream = fs.createWriteStream('posts.txt');
    const postsCursor = post
      .find({})
      .populate({
        path: 'auther',
        select: 'userName',
      })
      .cursor();

    postsCursor.on('data', (doc) => {
      writeStream.write(`title : ${doc.title} , auther :${doc.auther.userName} \n\n`);
    });
    postsCursor.on('end', () => {
      writeStream.end();
      console.log('✅ Export finished');
    });
    writeStream.on('finish', () => {
      res.download(path.resolve('./posts.txt'));
    });
    postsCursor.on('error', (err) => {
      next(err);
    });
    writeStream.on('error', (err) => {
      next(err);
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(3000);
