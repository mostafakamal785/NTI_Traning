import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';
import { errorHandler } from './errorHandler.js';


const app = express();
app.use(express.json());
const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log('conected to databaase');
  })
  .catch((error) => {
    console.log('error conecting to database:', error.message);
  });

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
  },
  genres: [String],
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

bookSchema.methods.getInfo = function () {
  return `the book ${this.title} by ${this.author}, published in ${this.publishedYear}`;
};

bookSchema.statics.findByGenre = function (genre) {
  return this.find({ genres: genre });
};

const Books = mongoose.model('Book', bookSchema);

bookSchema.pre('save', function (next) {
  console.log(`saving book ${this.title}`);
  next();
});

bookSchema.post('save', function () {
  console.log(`saved book ${this.title}`);
});

app.post('/books', async (req, res, next) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

app.get('/books/:id', async (req, res, next) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) throw new Error('Book not found');
    res.json(book);
  } catch (error) {
    next(error);
  }
});

app.put('/books/:id', async (req, res, next) => {
  try {
    const updated = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) throw new Error('Book not found');
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

app.delete('/books/:id', async (req, res, next) => {
  try {
    const deleted = await Books.findByIdAndDelete(req.params.id);
    if (!deleted) throw new Error('Book not found');
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
});

app.get('/books/genre/:genre', async (req, res, next) => {
  try {
    const books = await Books.findByGenre(req.params.genre);
    if (!books.length) throw new Error('No books found for this genre');
    res.json(books);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(3000);
