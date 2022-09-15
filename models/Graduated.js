import mongoose from 'mongoose';

const graduatedSchema = new mongoose.Schema({
  school: String,
  degree: String,
  job: String,
});

export default mongoose.model('Graduated', graduatedSchema);
