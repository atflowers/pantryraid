const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the food collection and inserts the food below
console.log("./scripts/seeds.js - ACCESSED");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pantryraid",
  {
    useMongoClient: true
  }
).then(
    () => { console.log(uri); },
    err => { console.log("Mongo server connection error: " + err); }
);

const foodSeed = [
  {
    item: "Apple",
    category: "Fruit",
    quantity: 3,
    units: "each",
    date: new Date(Date.now()),
    expires: new Date(+new Date() + 7*24*60*60*1000)
  },
  {
    item: "Orange",
    category: "Fruit",
    quantity: 8,
    units: "each",
    date: new Date(Date.now()),
    expires: new Date(+new Date() + 7*24*60*60*1000)
  },
  {
    item: "Ribs",
    category: "Meat",
    quantity: 16,
    units: "each",
    date: new Date(Date.now()),
    expires: new Date(+new Date() + 7*24*60*60*1000)
  },
  {
    item: "Rice",
    category: "Grain",
    quantity: 2.5,
    units: "lb",
    date: new Date(Date.now()),
    expires: new Date(+new Date() + 7*24*60*60*1000)
  }
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });