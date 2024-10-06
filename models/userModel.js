// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
