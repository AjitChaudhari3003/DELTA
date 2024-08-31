const express = require("express");
const router = express.Router();
const user = require("../models/user.js");
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controller/users.js");

router
.route("/signup")
.get(userController.renderSignupForm)
.post( wrapAsync(userController.signup ));

router
.route("/login")
.get( userController.renderloginForm)
.post(
    saveRedirectUrl,
     passport.authenticate("local",{
        failureRedirect:"/login " , 
        failureFlash: true}),
        userController.login
       );


 
router.get("/logout",userController.logout);

module.exports = router;


