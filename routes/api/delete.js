const router = require("express").Router();
const userController = require("../../controllers/userController");
const tokenCheck = require('../../middleware/tokenCheck')

// router.use(tokenCheck);

// Matches with "/api/user"
router.route("/")
  .all(function(req, res, next) {
    console.log('./routes/api/delete.js ------------------------------ ACCESS DELETION -------------------------');
    // tokenCheck;
    next();
  })
  // .get(userController.findAll)
  .delete(userController.remove);

// Matches with "/api/user/:id"
router.route("/:id")
  .all(function(req, res, next) {
    console.log('./routes/api/delete.js - router.route("/:id") - ACCESSED')
    console.log(" - req.body",req.body);
    console.log(" - req.params",req.params);
    next();
  })
  // .all(tokenCheck)
  .delete(userController.remove);

  // Matches with "/api/user/:token/:id/:foodID"
  router.route("/:token/:id/:foodID")
  .all(function(req, res, next) {
    console.log('./routes/api/delete.js - /api/user/:token/:id/:foodID - ACCESSED')
    console.log(" - req.body",req.body);
    console.log(" - req.params",req.params);
    next();
  })
  // .all(tokenCheck)
  .delete(userController.remove);

module.exports = router;
