const Joi = require('joi');

const registerUserSchema = Joi.object().keys({
  email: Joi.string().email().max(50).required(),
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string().min(8).required(),
  passwordRepeat: Joi.any().valid(Joi.ref('password')).required()
    .options({ language: { any: { allowOnly: 'debe coincidir la contraseña' } } }),
});

module.exports = {
  registerUser: (params) => { return Joi.validate(params, registerUserSchema); }
}