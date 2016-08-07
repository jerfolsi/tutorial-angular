var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('Bear', BearSchema);