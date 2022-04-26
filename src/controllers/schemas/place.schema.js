const Joi = require("joi");

const placeSchema = Joi.object({
    _id: Joi.number(),
    name: Joi.string().required(),
    description: Joi.string().min(32).max(256).required(),
    seasons:Joi.array().min(1).max(4),
    image:Joi.array().min(1).max(4),
    created: Joi.string()
})


module.exports = placeSchema