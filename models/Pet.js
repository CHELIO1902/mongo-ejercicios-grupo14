import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: String,
  birthdate: Date,
  type: String,
  breed: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
  },
});

export default mongoose.model('Pet', petSchema);
