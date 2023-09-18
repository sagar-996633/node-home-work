const joi=require("joi")

/* create Hotel */

const createHotel ={
    body: joi.object().keys({
        Hotel_Name: joi.string().required().trim(),
        Customer_name: joi.string().required().trim(),
        Room_number: joi.number().required().trim(),
        Hotel_address: joi.string().required().trim(),
        customer_checkin: joi.string().required().trim(),
        customer_checkout: joi.string().required().trim(),
    }),
};

module.exports ={
    createHotel
};