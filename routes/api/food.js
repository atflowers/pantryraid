const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// Matches with "/api/food"
router.route("/")
  .all(function(req, res, next) {
    console.log('./routes/api/food.js - router.route("/") - ACCESSED')
    next();
  })
  .get(foodController.findAll)
  .post(foodController.create);

// Matches with "/api/food/:id"
router.route("/:id")
  .all(function(req, res, next) {
    console.log('./routes/api/food.js - router.route("/:id") - ACCESSED')
    next();
  })
  .get(foodController.findById)
  .put(foodController.update)
  .delete(foodController.remove);

module.exports = router;
