const mongoose = require("mongoose");

const subscription = new mongoose.Schema({
    birthday: String,
    name: String,
    gender: String,
    email: String
}); 

const Subscription = new mongoose.model("Subscription", subscription)

module.exports = Subscription