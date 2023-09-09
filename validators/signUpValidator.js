import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
  min: 4,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 3,
};

const signUpSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Email cannot be empty.",
    "any.required": "Email is required.",
    "string.email": "Email must have @ & '.com'.",
  }),
  password: joiPwd(complexityOptions).messages({
    
  }),
  name: joi.string().min(3).max(15).required().messages({
    "string.min": "Minimum 3 characters.",
  }),
  photo: joi.string().uri(),
  birth_date: joi.date().max(Date.now()),
  age: joi.number().min(0).max(60),
  phone: joi.number(),
  verified: joi.boolean(),
});

export default signUpSchema;