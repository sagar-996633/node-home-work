const joi=require("joi")

/* create Movie */

const createMovie ={
    body: joi.object().keys({
        Movie_Name: joi.string().required().trim(),
        Ticket_buyer_name: joi.string().required().trim(),
        Ticket_price: joi.number().required().trim(),
        Sit_number: joi.string().required().trim(),
        Movie_time: joi.string().required().trim(),
    }),
};

module.exports ={
    createMovie
};