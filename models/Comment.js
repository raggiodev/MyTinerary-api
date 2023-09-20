import {Schema, model} from "mongoose";

const commentSchema = Schema(
  {
    userId: { type: Schema.ObjectId, ref: "users", required: true },
    itineraryId: { type: Schema.ObjectId, ref: "itineraries", required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = model("comments", commentSchema);

export default Comment;