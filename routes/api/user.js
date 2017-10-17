const router = require("express").Router();
const userController = require("../../controllers/userController");
const expController = require("../../controllers/expController");
const tokenCheck = require('../../middleware/tokenCheck')

// router.use(tokenCheck);

// Matches with "/api/user"
router.route("/")
  .all(function(req, res, next) {
    console.log('./routes/api/user.js - router.route("/") - ACCESSED');
    tokenCheck;
    next();
  })
  // .get(userController.findAll)
  .get(userController.getUser)
  .post(userController.create);

// Matches with "/api/user/:token"
router.route("/:token")
  .all(function(req, res, next) {
    console.log('./routes/api/user.js - router.route("/:token") - ACCESSED')
    // console.log("/////USER ROUTE\\\\\\\ - req.body",req.body);
    // console.log("/////USER ROUTE\\\\\\\ - req.params",req.params);
    next();
  })
  .all(tokenCheck)
  .get(userController.getUser)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/:token/:item"
router.route("/:token/:item")
.all(function(req, res, next) {
  console.log('./routes/api/user.js - router.route("/:token/:item") - ACCESSED')
  // console.log("/////USER ROUTE\\\\\\\ - req.body",req.body);
  // console.log("/////USER ROUTE\\\\\\\ - req.params",req.params);
  next();
})
.all(tokenCheck)
.get(expController.checkExpiration);

// Matches with "/api/user/:token/:id/:foodID"
router.route("/:token/:id/:foodID")
  .all(function(req, res, next) {
    console.log('./routes/api/user.js - /api/user/:token/:id/:foodID - ACCESSED')
    // console.log("/////USER DELETE ROUTE\\\\\\\ - req.body",req.body);
    console.log("/////USER DELETE ROUTE\\\\\\\ - req.params",req.params);
    next();
  })
  .all(tokenCheck)
  .delete(userController.remove);

module.exports = router;
