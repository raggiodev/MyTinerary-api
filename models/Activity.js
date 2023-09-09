import {Schema, model} from "mongoose";

const activitySchema = Schema({
  activities: {
    firstActivity: {
      type: {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
      required: true,
    },
    secondActivity: {
      type: {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
      required: true,
    },
    thirdActivity: {
      type: {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
      required: true,
    },
  },
  itineraryRelated: {
    type: Schema.Types.ObjectId,
    ref: "itinerary",
    required: true,
  },
});

const Activity = model("activity", activitySchema);

export default Activity;