const router = require("express").Router();
const userController = require("../../controllers/userController");
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

// Matches with "/api/user/:id"
router.route("/:id")
  // .all(function(req, res, next) {
  //   console.log('./routes/api/user.js - router.route("/:id") - ACCESSED')
  //   next();
  // })
  .all(tokenCheck)
  .get(userController.getUser)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
