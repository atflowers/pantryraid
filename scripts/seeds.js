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

const expirationSeed = [
  {
    item: "peach",
    category: "fruit",
    package: "canned",
    storage: "pantry",
    opened: false,
    cooked: false,
    life: 365
  },
  {
    item: "pea",
    category: "vegetable",
    package: "bag",
    storage: "freezer",
    opened: false,
    cooked: false,
    life: 180
  },
  {
    item: "beef ribs",
    category: "meat",
    package: "none",
    storage: "refrigerator",
    opened: true,
    cooked: false,
    life: 5
  },
  {
    item: "bacon",
    category: "meat",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 14
  },
  {
    item: "chicken",
    category: "poultry",
    package: "plastic",
    storage: "refridgerator",
    opened: false,
    cooked: false,
    life: 2
  },
  {
    item: "apple",
    category: "fruit",
    package: "none",
    storage: "refridgerator",
    opened: false,
    cooked: false,
    life: 30
  },
  {
    item: "cream cheese",
    category: "dairy",
    package: "plastic",
    storage: "refridgerator",
    opened: true,
    cooked: false,
    life: 14
  },
  {
    item: "deli turkey",
    category: "meat",
    package: "plastic",
    storage: "refrigerator",
    opened: true,
    cooked: false,
    life: 5
  },
  {
    item: "celery",
    category: "vegetable",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 21
  },
  {
    item: "hummus",
    category: "snack",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 10
  },
  {
    item: "eggs",
    category: "dairy",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 21
  },
  {
    item: "ice cream",
    category: "dairy",
    package: "carton",
    storage: "freezer",
    opened: false,
    cooked: false,
    life: 60
  },
  {
    item: "shrimp",
    category: "meat",
    package: "plastic",
    storage: "refrigerator",
    opened: true,
    cooked: false,
    life: 4
  },
  {
    item: "frozen vegetables",
    category: "vegetables",
    package: "plastic",
    storage: "freezer",
    opened: false,
    cooked: false,
    life: 300
  },
  {
    item: "lettuce",
    category: "vegetable",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 10
  },
  {
    item: "onions",
    category: "vegetable",
    package: "plastic",
    storage: "countertop",
    opened: false,
    cooked: false,
    life: 42
  },
  {
    item: "dry salami",
    category: "meat",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 30
  },
  {
    item: "ground turkey",
    category: "meat",
    package: "plastic",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 2
  },
  {
    item: "grapes",
    category: "fruit",
    package: "glass",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 10
  },
  {
    item: "lemons",
    category: "fruit",
    package: "none",
    storage: "refrigerator",
    opened: false,
    cooked: false,
    life: 45
  }
];

db.Food
  .remove({})
  .then(() => db.Expiration.collection.insertMany(expirationSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });