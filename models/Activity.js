import {Schema, model} from "mongoose";

const activitySchema = Schema(
  {
    name: { type: String, required: true },
    itineraryId: { type: Schema.ObjectId, ref: "Itinerary", required: true },
    photo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Activity = model("activities", activitySchema);

export default Activity;