const express = require("express");
const { Musiccontroller } = require("../../controllers");

const router = express.Router();

/** Create Music */
router.post(
    "/create-Music",
    Musiccontroller.createMusic
);

/** Get Music */
router.get(
    "/list",
    Musiccontroller.Musiclist
);

/** Get Music details by id */
router.get(
    "/get-details/:MusicId",
    Musiccontroller.getMusicDetails
);

/** update Music */
router.put(
    "/update-Music/:MusicId",
    Musiccontroller.updateMusic
);

/** Delete Music */
router.delete(
    "/Delete/:MusicId",
    Musiccontroller.deleteMusic
);

module.exports = router;