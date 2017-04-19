let mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  body: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  tags:  {
    type: [String],
    trim: true
  },

  postType: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  created:  {
    type: Date,
    default: Date.now
  },

});

let Posts = mongoose.model('Posts', PostsSchema);
module.exports = {Posts }
