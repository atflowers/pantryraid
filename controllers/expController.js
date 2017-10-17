const db = require("../models");

// Defining methods for the expController
module.exports = {
  checkExpiration: function(req, res) {
    console.log("Expiration req.params.item",req.params.item);
    db.Expiration
      .find({"item": req.params.item}, (err, results) => {
        if (results) {
          console.log("Found inventory item:",results);
        } else {
          console.log("Could not find inventory item, error:",err);
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
