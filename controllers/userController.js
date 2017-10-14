const db = require("../models");
const jwt = require("jsonwebtoken");
const secret_key = require("../secret");

// Defining methods for the foodController
module.exports = {
  checkRecords: function(req, res) {
    db.User
      .find({
        username: req.body.username,
        password: req.body.password
      }, (err, data) => {
        // if there was an error OR we didn't find a record
        // matching the username and password given by the
        // login request, send a 404 (not found) back
        if (err || data.length === 0) {
            res.sendStatus(422);
        } else {
            console.log(data);
            res.json({
                data: data,
                token: jwt.sign({
                    // user: "mytestuser"
                    // sub: req.body.username
                    sub: data[0]._id,
                    iss: 'http://www.pantryraid.us',
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                }, secret_key)
            });
        }
      })
  },
  checkUsername: function(req, res) {
    db.User
      .find({
        username: req.body.username
      }, (err, data) => {
        if (err || data.length === 0) {
          res.sendStatus(422);
        } else {
          console.log("checkUsername", data);
        }
      })
  },
  addRecord: function(req, res) {
    db.User
      .create(req.body, (err, data) => {
        if (err || data.length === 0) {
          res.sendStatus(422);
        } else {
          console.log("addRecord: ", data);
          // Create token at signup
          res.json({
            data: data,
            token: jwt.sign({
                // user: "mytestuser"
                // sub: req.body.username
                sub: data._id,
                iss: 'http://www.pantryraid.us',
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, secret_key)
          });
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
