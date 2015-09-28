var mongoose = require('mongoose');
var Schema  = mongoose.Schema;


var Post = new Schema({
  title: String,
  description: String,
  content: String
});

module.exports = mongoose.model('posts', Post);
