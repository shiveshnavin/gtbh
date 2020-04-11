var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NoteSchema = new Schema({
	'client':String,
	'userid' : String,
	'id' : String,
	'title' : String,
	'details' : String,
	'images' : Array,
	'dateTime' : String
});

module.exports = mongoose.model('Note', NoteSchema);
