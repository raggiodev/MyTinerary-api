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

export const signInSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "The email is required",
    "string.empty": "The field email cannot be empty.",
    "string.email": "Invalid email address. Please enter a valid email.",
  }),
  password: joiPassword(complexityOptions),
});

export default signInSchema;