const router = require("express").Router();
const foodRoutes = require("./food");
const loginRoutes = require("./login");
const signupRoutes = require("./signup");

router.use("/food", foodRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
