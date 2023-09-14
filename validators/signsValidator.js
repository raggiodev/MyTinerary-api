import joi from "joi";
import joiPassword from "joi-password-complexity";

const complexityOptions = {
  min: 3,
  max: 50,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 3,
};

export const signUpSchema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "any.required": "The name is required",
    "string.min": "Name is too short. Please enter at least 3 characters.",
    "string.max": "Name is too long. Please limit to 50 characters.",
  }),  
  email: joi.string().email().required().messages({
    "any.required": "The email is required",
    "string.empty": "The field email cannot be empty.",
    "string.email": "Invalid email address. Please enter a valid email.",
  }),
  password: joiPassword(complexityOptions).required(),
  photo: joi.string().uri(),
  birth_date: joi.date().max(Date.now()),
  verified: joi.boolean(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "The email is required",
    "string.empty": "The field email cannot be empty.",
    "string.email": "Invalid email address. Please enter a valid email.",
  }),
  password: joiPassword(complexityOptions),
});