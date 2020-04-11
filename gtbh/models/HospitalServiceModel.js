var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var HospitalServiceSchema = new Schema({
	'client':String,
	'infoUrl' : String,
	'details' : String,
	'images' : Array,
	'id' : String,
	'name' : String,
	'bodyPartId' : String,
	'categoryId' : String
});

module.exports = mongoose.model('HospitalService', HospitalServiceSchema);
