var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PKeySchema = new Schema({
	'client':String,
	'password' : String,
	'userid' : String,
	'id' : String
});

module.exports = mongoose.model('PKey', PKeySchema);
