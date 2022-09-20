import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: Date,
  phone: String,
  address: String,
  email: String,
  password: String,
  cardNumber: String,
});

export default mongoose.model('Owner', ownerSchema);
