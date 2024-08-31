const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware.js")
  
const reviewController = require("../controller/review.js");
const review = require("../controller/review.js");

//Reviews 
// Create Route
router.post("/" ,isLoggedIn, validateReview , wrapAsync(reviewController.createReview));


//Delete Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.deleteReview));

module.exports = router;

