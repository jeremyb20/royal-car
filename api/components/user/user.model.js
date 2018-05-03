const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String },
    firstSurname: { type: String, required: true },
    secondSurname: { type: String },
    id: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
    birthDate: { type: Date },
    phone : { type: String },
    photo : {type : String}
});

module.exports = mongoose.model('User', UserSchema);