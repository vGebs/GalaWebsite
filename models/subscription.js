const mongoose = require("mongoose");

const subscription = new mongoose.Schema({
    birthday: String,
    name: String,
    gender: String,
    password: String
}); 

const Subscription = new mongoose.model("Subscription", subscription)

module.exports = Subscription