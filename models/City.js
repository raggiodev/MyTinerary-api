import {Schema, model} from 'mongoose';

const citySchema = Schema({
  city: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  fundation: { type: String, required: true },
  population: { type: Number, required: true },
  photo: { type: String, required: true },
  itineraries: [{ type: Schema.Types.ObjectId, ref: 'Itinerary' }], // Referencia al model 'Itinerary'
},
{
  timestamps: true
});

const City = model('Cities', citySchema);

export default City;