const mongoose = require('mongoose');
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

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


UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });
  
  UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

module.exports = mongoose.model('User', UserSchema);





