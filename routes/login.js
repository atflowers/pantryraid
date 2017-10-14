// const router = require("express").Router();
// const jwt = require("jsonwebtoken");
// const secret_key = require("../secret");
// const db = require("../models/user");

// // our route is NOT protected by the JWT, but
// // it will create the token for a user
// // who can successfully login
// router.post("/login", (req, res)=> {
//     console.log("LOGIN REQUEST ===Direct===");
//     // console.log(req.body);
//     db.find({
//         username: req.body.username,
//         password: req.body.password
//     }, (err, data) => {
//         // if there was an error OR we didn't find a record
//         // matching the username and password given by the
//         // login request, send a 404 (not found) back
//         if (err || data.length === 0) {
//             res.sendStatus(404);
//         } else {
//             // console.log(data);
//             res.json({
//                 data: data,
//                 token: jwt.sign({
//                     // user: "mytestuser"
//                     // sub: req.body.username
//                     sub: data[0]._id,
//                     iss: 'http://www.pantryraid.us',
//                     exp: Math.floor(Date.now() / 1000) + (60 * 60)
//                 }, secret_key)
//             });
//         }
//     });
// });

// module.exports = router;