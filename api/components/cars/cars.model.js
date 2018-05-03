const mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    'name' : { type: String, required: true },
    'photo' : { type: String, required: true },
    'latitude' : { type: String, required: true },
    'longitude' : { type: String, required: true },
    'province' : { type: String, required: true },
    'canton' : { type: String, required: true },
    'distrite' : { type: String, required: true },
    'address' : { type: String, required: true },
    'servicePhone' : { type: String, required: true },
    'serviceEmail' : { type: String, required: true },
    'reservationEmail' : { type: String, required: true },
    'reservationPhone' : { type: String, required: true }
});

module.exports = mongoose.model('Hotel', HotelSchema);