const mongoose = require('mongoose')
const likeSchema = require('./like')

const commentSchema = new mongoose.Schema({
  notes: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [likeSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)
