const router = require("express").Router();
const userController = require("../../controllers/userController");

// our route is NOT protected by the JWT, but
// it will create the token for a user
// who can successfully login
router.route("/")
    .all( function(req, res, next) {
    console.log("SIGNUP REQUEST ===API===");
    // console.log(req.body);
    next();
    })
    .get( userController.checkUsername )
    .post( userController.addRecord );

module.exports = router;