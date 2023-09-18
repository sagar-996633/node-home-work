const joi=require("joi")

/* create Travel */

const createTravel ={
    body: joi.object().keys({
        Travel_Type: joi.string().required().trim(),
        Travel_From: joi.string().required().trim(),
        Travel_To: joi.string().required().trim(),
        Travel_Date: joi.string().required().trim(),
        Travel_Return: joi.string().required().trim(),
    }),
};

module.exports ={
    createTravel
};