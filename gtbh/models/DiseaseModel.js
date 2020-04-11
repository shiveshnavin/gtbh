var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DiseaseSchema = new Schema({
	'client':String,
	'infoUrl' : [String],
	'details' : String,
	'images' : Array,
	'name' : String,
	'id' : String,
	'bodyPartId' : String,
	'categoryId' : String
});

module.exports = mongoose.model('Disease', DiseaseSchema);
