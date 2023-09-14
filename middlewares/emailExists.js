import User from "../models/User.js";

const emailExists = async (req, res, next) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (!emailExists) {
    return next();
  }

  return res.status(400).json({
    success: false,
    message: "Email already exists. Please Login or choose another one.",
  });
};

export default emailExists;