const router = require("express").Router();
const foodRoutes = require("./food");
const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const userRoutes = require("./user");
// const tokenCheck = require('../middleware/tokenCheck')

router.use("/food", foodRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

//INSERT TOKEN CHECK HERE
// router.use(tokenCheck);
router.use("/user", userRoutes);

module.exports = router;
