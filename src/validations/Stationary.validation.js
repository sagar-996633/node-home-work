const joi=require("joi")

/* create Stationary */

const createStationary ={
    body: joi.object().keys({
        Stationary_Name: joi.string().required().trim(),
        Stationary_item: joi.string().required().trim(),
        Stationary_price: joi.number().required().trim(),
        Stationary_address: joi.string().required().trim(),
    }),
};

module.exports ={
    createStationary
};