const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  developer: { type: String, required: true },
  genre: [{ type: String }], 
  year: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Game', GameSchema);
