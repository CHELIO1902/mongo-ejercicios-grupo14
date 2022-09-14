import mongoose from 'mongoose';

/**
 * 1.- Schema
 * 2.- Nombre
 */

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  editorial: String,
  publishDate: Date,
  pages: Number,
  isbn: String,
  price: Number,
});

export default mongoose.model('Book', bookSchema);
