const express = require("express");
const { Jewellerycontroller } = require("../../controllers");

const router = express.Router();

/** Create Jewellery */
router.post(
    "/create-Jewellery",
    Jewellerycontroller.createJewellery
);

/** Get Jewellery */
router.get(
    "/list",
    Jewellerycontroller.Jewellerylist
);

/** Get Jewellery details by id */
router.get(
    "/get-details/:JewelleryId",
    Jewellerycontroller.getJewelleryDetails
);

/** update Jewellery */
router.put(
    "/update-Jewellery/:JewelleryId",
    Jewellerycontroller.updateJewellery
);

/** Delete Jewellery */
router.delete(
    "/Delete/:JewelleryId",
    Jewellerycontroller.deleteJewellery
);

module.exports = router;