const joi=require("joi")

/* create Bus */

const createBus ={
    body: joi.object().keys({
        Bus_Name: joi.string().required().trim(),
        Buyer_Name: joi.string().required().trim(),
        Bus_number: joi.number().required().trim(),
        Ticket_price: joi.number().required().trim(),
        Sit_number: joi.string().required().trim(),
        Bus_time: joi.string().required().trim(),
    }),
};

module.exports ={
    createBus
};