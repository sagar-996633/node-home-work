const joi=require("joi")

/* create School */

const createSchool ={
    body: joi.object().keys({
        School_name: joi.string().required().trim(),
        Student_name: joi.string().required().trim(),
        Student_id: joi.string().required().trim(),
        Student_std: joi.number().required().trim(),
        is_active: joi.string().required().trim(),
    }),
};

module.exports ={
    createSchool
};