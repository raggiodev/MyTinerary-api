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

const signInSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Email cannot be empty.",
    "any.required": "Email is required.",
    "string.email": "Email must have @ & '.com'.",
  }),
  password: joiPwd(complexityOptions).required(),
});

export default signInSchema;