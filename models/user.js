const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    item: { type: String, default: "apple" },
    category: String,
    quantity: { type: Number, default: 3 },
    units: { type: String, default: "each" },
    date: { type: Date, default: Date.now },
    expires: { type: Date, default: Date.now }
});

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    inventory: [foodSchema],
    timezone: { type: String },
    created: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
module.exports = User;