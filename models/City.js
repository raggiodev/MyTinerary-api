import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  name: String,
  photo: String,
  country: String,
});

export default mongoose.model('City', citySchema);