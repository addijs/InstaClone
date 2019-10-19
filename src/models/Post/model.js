const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },

  postThumb: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  }
});

PostSchema.virtual('postThumbURL').get(function() {
  return `http://localhost:5002/files/${this.postThumb}`
});

module.exports = mongoose.model('Post', PostSchema);