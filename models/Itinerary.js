import {Schema, model} from 'mongoose';

const itinerarySchema = Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  hashtags: [{ type: String }],
  city: { type: Schema.Types.ObjectId, ref: 'City', required: true }, // Referencia al model 'City'
});

const Itinerary = model('Itinerary', itinerarySchema);

export default Itinerary;