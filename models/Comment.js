import {Schema, model} from "mongoose";

const commentSchema = Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User", required: true },
    itineraryId: { type: Schema.ObjectId, ref: "Itinerary", required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = model("comments", commentSchema);

export default Comment;