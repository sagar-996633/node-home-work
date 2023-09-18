const joi=require("joi")

/* create Grocery */

const createGrocery ={
    body: joi.object().keys({
        Store_Name: joi.string().required().trim(),
        Buyer_Name: joi.string().required().trim(),
        Phone_Number: joi.number().integer().trim(),
        Totle_Product: joi.number().integer().trim(),
        Totle_Price: joi.number().integer().trim(),
    }),
};

module.exports ={
    createGrocery
};