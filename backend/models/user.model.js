const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    type: String,
  },
  gyroscrope: {
    type: Array,
  },
  accelorometer: {
    type: Array,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;