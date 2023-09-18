const express = require("express");
const { Grocerycontroller } = require("../../controllers");

const router = express.Router();

/** Create Grocery */
router.post(
    "/create-Grocery",
    Grocerycontroller.createGrocery
);

/** Get Grocery */
router.get(
    "/list",
    Grocerycontroller.Grocerylist
);

/** Get Grocery details by id */
router.get(
    "/get-details/:GroceryId",
    Grocerycontroller.getGroceryDetails
);

/** update Grocery */
router.put(
    "/update-Grocery/:GroceryId",
    Grocerycontroller.updateGrocery
);

/** Delete Grocery */
router.delete(
    "/Delete/:groceryId",
    Grocerycontroller.deleteGrocery
);

module.exports = router;