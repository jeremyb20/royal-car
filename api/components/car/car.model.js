const mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String },
  matricula: { type: String, required: true },
  photo: { type: String },
  caracteristicas: { type: String }
});

module.exports = mongoose.model('Car', CarSchema);