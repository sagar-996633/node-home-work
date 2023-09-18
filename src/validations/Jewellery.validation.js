const joi=require("joi")

/* create Jewellery */

const createJewellery ={
    body: joi.object().keys({
        Jewellery_Name: joi.string().required().trim(),
        Jewellery_buyer_name: joi.string().required().trim(),
        Jewellery_caret: joi.number().required().trim(),
        Jewellery_wight: joi.string().required().trim(),
        Jewellery_price: joi.number().required().trim(),
    }),
};

module.exports ={
    createJewellery
};