const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    item: { type: String, required: true },
    category: String,
    quantity: { type: Number, required: true },
    units: { type: String, required: true },
    date: { type: Date, default: Date.now },
    // expires: { type: Date, default: Date.now + 7*24*60*60*1000 }
    expires: { type: Date, default: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
