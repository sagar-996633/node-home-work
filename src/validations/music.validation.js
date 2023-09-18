const joi=require("joi")

/* create Music */

const createMusic ={
    body: joi.object().keys({
        Music_Name: joi.string().required().trim(),
        Music_type: joi.string().required().trim(),
        Singer_Name: joi.string().required().trim(),
        Director_Name: joi.string().required().trim(),
    }),
};

module.exports ={
    createMusic
};