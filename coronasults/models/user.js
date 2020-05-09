const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true,
    default: Date.now
  },
  addedByAdmin:{
    type: Date,
    required: true,
    default: Date.now
  },
  currentResult:{
      type: Number,
      default: 0
  },
  locationTested:{
    type: String,
    default: ""
}
})

module.exports = mongoose.model('User', userSchema)