const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('./task');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim: true
  },
  age: {
    type: Number,
    default: 12,
    validate(value) {
      if (value < 12) {
        throw new Error('Age must be greater than 12!');
      }
    }
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
  const userObj = this.toObject();

  delete userObj.password;
  delete userObj.tokens;

  return userObj;
}

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);

  this.tokens = this.tokens.concat({ token });
  await this.save();
  
  return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error({ error: 'Unable to login!' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error({ error: 'Unable to login!' });
  }

  return user;
}

// Hashing user password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

// Delete user tasks when user is deleted
userSchema.pre('remove', async function (next) {
  await Task.deleteMany({ owner: this._id });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;