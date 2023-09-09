import {Schema, model} from "mongoose";

const itinerarySchema = Schema(
  {
    title: { type: String, required: true },
    photo: { type: String, required: true },
    author: { type: String, required: true },
    authorPhoto: { type: String, required: true },
    price: { type: Number, required: true, min: 1, max: 5 },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    hashtags: [{ type: String }],
    city: { type: Schema.Types.ObjectId, ref: "City", required: true }, // Referencia al model 'City'
    comments: [{comment:{type:String, required:true}, user:{type:mongoose.Types.ObjectId, required:true, ref:'user'}}], // Referencia al model 'User'
  },
  {
    timestamps: true,
  }
);

const Itinerary = model("Itinerary", itinerarySchema);

export default Itinerary;