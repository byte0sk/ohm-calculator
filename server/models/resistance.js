const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true
},
  color: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: false
  },
  significantFigure: {
    type: Number,
    required: false
  },
  multiplier: {
    type: Number,
    required: false
  },
  tolerance: {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model('Resistance', schema)