const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  notes: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
