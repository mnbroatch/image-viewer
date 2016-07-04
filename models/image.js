let mongoose = require('mongoose');


let imageSchema = new mongoose.Schema({
	url: String,
	createdAt: {type: Date, default: Date.now},
	album: String
});

let Image = mongoose.model('Image', imageSchema);

module.exports = Image;

