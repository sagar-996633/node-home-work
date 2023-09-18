const express = require("express");
// const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  // validate(userValidation.createuser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  // validate(userValidation.getuserList),
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  // validate(userValidation.getDetails),
  userController.getUserDetails
);

/** user details update by id */
router.put(
  "/update-details/:userId",
  // validate(userValidation.updateDetails),
  userController.updateDetails
);

/**  Delete user */
router.delete(
  "/delete-user/:userId",
  // validate(userValidation.getuserList),
  userController.deleteuser
);

module.exports = router;