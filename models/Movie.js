/**
 * 1.- Schema
 * 2.- Nombre
 */

import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  cast: [String],
  description: String,
});

export default mongoose.model('Movie', movieSchema);
