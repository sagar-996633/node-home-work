const joi =require("joi")

/** create user */
const createCategory = {
    body: joi.object().keys({
      category_name: joi.string().required().trim(),
      category_decs: joi.string().required().trim(),
      is_active: joi.string().required().trim(),
    }),
  };

  module.exports = {
    createCategory
  };