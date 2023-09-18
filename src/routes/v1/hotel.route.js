const express = require("express");
const { Hotelcontroller } = require("../../controllers");

const router = express.Router();

/** Create Hotel */
router.post(
    "/create-Hotel",
    Hotelcontroller.createHotel
);

/** Get Hotel */
router.get(
    "/list",
    Hotelcontroller.Hotellist
);

/** Get Hotel details by id */
router.get(
    "/get-details/:HotelId",
    Hotelcontroller.getHotelDetails
);

/** update Hotel */
router.put(
    "/update-Hotel/:HotelId",
    Hotelcontroller.updateHotel
);

/** Delete Hotel */
router.delete(
    "/Delete/:HotelId",
    Hotelcontroller.deleteHotel
);

module.exports = router;