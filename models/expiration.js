const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expirationSchema = new Schema({
    item: { type: String, required: true },
    category: String,
    package: String,
    storage: String,
    opened: Boolean,
    cooked: Boolean,
    life: { type: Number, required: true }
});

const Expiration = mongoose.model("Expiration", expirationSchema);

module.exports = Expiration;