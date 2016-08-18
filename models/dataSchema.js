var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	url: String,
	description: String
});

mongoose.model('dataModel', dataSchema);