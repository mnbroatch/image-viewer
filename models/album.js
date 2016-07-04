let mongoose = require('mongoose');


let albumSchema = new mongoose.Schema({
	name: String,
	images: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Image'}]
});


let Album = mongoose.model('Album', albumSchema);

module.exports = Album;

