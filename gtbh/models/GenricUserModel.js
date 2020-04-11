var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var GenricUserSchema = new Schema({
	'client':String,
	'name' : String,
	'id' : String,
	'gender' : String,
	'married' : String,
	'occupation' : String,
	'phone' : String,
	'age' : String,
	'type' : String
});

module.exports = mongoose.model('GenricUser', GenricUserSchema);
