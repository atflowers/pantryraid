const router = require("express").Router();
const userController = require("../../controllers/userController");

// our route is NOT protected by the JWT, but
// it will create the token for a user
// who can successfully login
router.route("/")
    .all( function(req, res, next) {
    console.log("LOGIN REQUEST ===API===");
    // console.log(req.body);
    next();
    })
    .post( userController.checkRecords )

module.exports = router;