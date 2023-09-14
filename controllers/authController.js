import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authController = {
  signUp: async (req, res, next) => {
    try {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);

      let body = { ...req.body };
      body.password = passwordHash;

      const newUser = await User.create(body);

      let { email, name, photo, _id } = newUser;

      const token = jwt.sign(
        { email, name, photo, _id },
        process.env["SECRET_KEY"],
        { expiresIn: "1h" }
      );

      return res.status(201).json({
        success: true,
        response: { email, name, photo, _id },
        token: token,
        message: "Sign up successfully.",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        throw new Error("There are no users with this email address.");
      }

      let passwordIsCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsCorrect) {
        throw new Error("Incorrect email address or password");
      }

      let { email, name, photo, _id } = user;

      const token = jwt.sign(
        { email, name, photo, _id },
        process.env["SECRET_KEY"],
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        success: true,
        response: { email, name, photo, _id },
        token: token,
        message: "Sign in successfully.",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  loginWithToken: (req, res) => {
    const { email, name, photo, _id } = req.user;

    res.status(200).json({
      success: true,
      response: { email, name, photo, _id },
      message: "Sign in successfully.",
      body: req.body,
    });
  },
};

export default authController;