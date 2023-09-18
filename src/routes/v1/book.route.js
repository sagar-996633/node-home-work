const express = require("express");
// const { userValidation } = require("../../validations");
const { BookController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create Book */
router.post(
  "/create-Book",
  BookController.CreateBook
);

/** Get Book list */
router.get(
  "/list",
  BookController.Booklist
);

/** Get Book delete */

router.delete(
  "/delete/:BookId",
  BookController.deleteRecord
)

module.exports = router;