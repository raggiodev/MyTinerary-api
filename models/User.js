import {Schema, model} from "mongoose";

const userSchema = Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number },
    phone: { type: Number },
    email: { type: String, required: true },
    birth_date: { type: Date },
    country: { type: String, required: true },
    photo: { type: String, default: 'https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png' },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    googleUser: { type: Boolean, default: false },
    itinerariesLiked: [{ type: Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;