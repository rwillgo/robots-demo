const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bot = new Schema({
  name: { type: String },
  avatar: { type: String },
  purpose: { type: String },
  created: { type: Number, default: Date.now() },
});

module.exports = mongoose.model("Bot", Bot);
