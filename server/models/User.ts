const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

let UserScheme = new Schema({
  name: {type: String, unique: true, required: true},
  nickname: {type: String, required: true},
});

module.exports = mongoose.model('User', UserScheme);
