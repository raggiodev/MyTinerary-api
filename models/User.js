import {Schema, model} from "mongoose";

const userSchema = Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String },
    photo: { type: String, default: "https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png" },
    birth_date: { type: Date },
    age: { type: Number },
    phone: { type: Number },
    author: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;