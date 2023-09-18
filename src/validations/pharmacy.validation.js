const joi=require("joi")

/* create Pharmacy */

const createPharmacy ={
    body: joi.object().keys({
        Company_Name: joi.string().required().trim(),
        Madicine_name: joi.string().required().trim(),
        Madicine_Price: joi.number().required().trim(),
        Madicine_Power: joi.number().required().trim(),
    }),
};

module.exports ={
    createPharmacy
};