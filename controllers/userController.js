const db = require("../models");
const jwt = require("jsonwebtoken");
const secret_key = require("../secret");

// Defining methods for the foodController
module.exports = {
  loginAuth: function(req, res) {
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
            // console.log(data);
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
          console.log("userController - checkUsername: ", data);
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
  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // getUser: function(req, res) {
  //   db.User
  //     .findById("59e249f943a4e30e9c986cd0")
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  getUser: function(req, res) {
    // console.log("id: ", req.url);
    // console.log("userController.js getUser req:",req);
    // console.log("userController.js getUser req.token:",req.token);
    // const urlID = req.url.replace("/", "");
    // console.log("userController.js token: ",urlID);
    // const decoded = jwt.verify(token, secret_key);
    // console.log("decoded:",decoded);
    // console.log("req.token.data.sub",req.token.data.sub);
    const urlID = req.token.data.sub;
    db.User
      .findById(urlID, (err, data) => {
        // console.log(data);
        // console.log("------------req.body-----------");
        console.log("USER information has been pulled from the server.");
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Food
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    // Create new food item in user profile

    // const urlID = req.url.replace("/", "");
    // console.log("Is this the ID??",req.token.data.sub);
    const urlID = req.token.data.sub;
    db.User
      // .update({_id : "59e249f943a4e30e9c986cd0"}, { $set: { username: "Jackoby" } }, function(err, res) {
      //   if (err) throw err;
      //   console.log("Updated username");
      //   console.log(res);
      //   // db.close();
      // })
      .findById(urlID, (err, data) => {
        // console.log(data);
        // console.log("------------req.body-----------");
        // console.log(req.body);
        // if (req.body.expires == '') {
        //   req.body.expires = null;
        // }
        // console.log(typeof req.body.expires);
        data.inventory.push(req.body);
        console.log("--------------- new inventory added ----------------");
        // console.log(data.inventory);
        data.save();
      })
      // .update("59e249f943a4e30e9c986cd0", )
      // .update(
      //   { _id: "59e249f943a4e30e9c986cd0" },
      //   {
      //     $push: {
      //       inventory: [ {item: req.body.item, category: req.body.category, quantity: req.body.quantity, units: req.body.units}
      //         //  $each: [
      //         //   { item: "banana", category: "Fruit", quantity: "5", units: "lb" },
      //         //   { item: "boeuf", category: "Meat", quantity: "8", units: "oz" },
      //         //   { item: "hamhocks", category: "Meat", quantity: "17", units: "lb" }
      //         // ]
      //       ]
      //     }
      //   }
      // )
      // .update({_id : "59e249f943a4e30e9c986cd0"}, { $set: { username: "Jackobs" } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
