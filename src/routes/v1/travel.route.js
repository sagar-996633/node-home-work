const express = require("express");
const { Travelcontroller } = require("../../controllers");

const router = express.Router();

/** Create Travel */
router.post(
    "/create-Travel",
    Travelcontroller.createTravel
);

/** Get Travel */
router.get(
    "/list",
    Travelcontroller.Travellist
);

/** Get Travel details by id */
router.get(
    "/get-details/:TravelId",
    Travelcontroller.getTravelDetails
);

/** update Travel */
router.put(
    "/update-Travel/:TravelId",
    Travelcontroller.updateTravel
);

/** Delete Travel */
router.delete(
    "/Delete/:TravelId",
    Travelcontroller.deleteTravel
);

module.exports = router;