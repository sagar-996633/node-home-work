const express = require("express");
const { ecommercecontroller} = require("../../controllers");
const { ecommerceService } = require("../../services");

const router = express.Router();

/** Get categort list */
router.get(
    "/list",
    ecommercecontroller.getList,
  );
module.exports = router;