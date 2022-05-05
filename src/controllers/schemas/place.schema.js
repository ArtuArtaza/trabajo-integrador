const Joi = require("joi");

const placeSchema = Joi.object({
    _id: Joi.number(),
    name: Joi.string().required(),
    description: Joi.string().min(32).required(),
    seasons:Joi.array().min(1).max(4).required(),
    image:Joi.array().min(1).max(4).required(),
    created: Joi.string(),
    ubication: Joi.string().required(),
    coords: Joi.array().min(2).max(2).required(),
})


module.exports = placeSchema