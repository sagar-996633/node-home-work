const express = require("express");
const { Moviecontroller } = require("../../controllers");

const router = express.Router();

/** Create Movie */
router.post(
    "/create-movie",
    Moviecontroller.createMovie
);

/** Get Movie */
router.get(
    "/list",
    Moviecontroller.Movielist
);

/** Get Movie details by id */
router.get(
    "/get-details/:MovieId",
    Moviecontroller.getMovieDetails
);

/** update Movie */
router.put(
    "/update-Movie/:MovieId",
    Moviecontroller.updateMovie
);

/** Delete Movie */
router.delete(
    "/Delete/:MovieId",
    Moviecontroller.deleteMovie
);

module.exports = router;