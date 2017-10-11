const router = require("express").Router();
const foodRoutes = require("./food");

// food routes
router.use("/food", foodRoutes);

module.exports = router;
