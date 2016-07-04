"use strict;"


let express = require('express');
let Album = require('../models/album');

let router = express.Router();


router.route('/')
.get(function(req,res){
	Album.find({}, (err,albums) => {
		res.status(err? 400:200).send(err || albums);
	});
})
.post(function(req,res){
	let album = new Album(req.body);
	album.save((err,savedAlbum) => {
		res.status(err? 400:200).send(err || savedAlbum);
	});
});


router.route('/:id')
.get(function(req,res){
	Album.find({_id:req.params.id}, (err,album) => {
		res.status((err || !album)? 400:200).send(err || album[0]);
	});
})
.put(function(req,res){
	Album.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,savedAlbum) => {
		res.status(err? 400:200).send(err || savedAlbum);
	});
})
.delete(function(req,res){
	Album.findByIdAndRemove(req.params.id, err => {
		res.status(err? 400:200).send(err);
	});
});


module.exports = router;

