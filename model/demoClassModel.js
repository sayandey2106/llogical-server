const mongoose = require('mongoose');

const DemoClass = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
  },
  grade: {
    type: String,
    allowNull: false,
  },
  
  date: {
    type: String,
    allowNull: false,
  },
  time: {
    type: String,
    allowNull: false,
  },
  school: {
    type: String,
    allowNull: false,
  },

  board: {
    type: String,
    allowNull: false,
  },
  address: {
    type: String,
    allowNull: false,
  },
  mobileNo: {
    type: String,
    allowNull: false,
  },
  isDeleted: {
    type: Boolean,
    allowNull: false
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  }
});
  
module.exports = mongoose.model('demoClass', DemoClass, "demoClass");