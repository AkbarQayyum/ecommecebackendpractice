const mongoose = require("mongoose");
const Schema = require("./Schema/Schema");
const Modal = mongoose.model("products", Schema);
module.exports = Modal;
