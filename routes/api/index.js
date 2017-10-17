const router = require("express").Router();
const foodRoutes = require("./food");
const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const userRoutes = require("./user");
// const deleteRoutes = require("./delete");
// const tokenCheck = require('../middleware/tokenCheck')

router.use("/food", foodRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

//Authentication required
router.use("/user", userRoutes);
// router.use("/delete", deleteRoutes);

module.exports = router;
