const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  users: {
    type: Array,
    require: true
  },
  storage:{
    type: Array,
    require: true
  }
});

module.exports = mongoose.model('Record', RecordSchema);