const joi =require("joi")

/** create user */
const CreateBook = {
    body: joi.object().keys({
        Book_name: joi.string().required().trim(),
        Book_decs: joi.string().required().trim(),
        Book_price: joi.number().required().trim(),
    }),
  };

  module.exports = {
    CreateBook
  };