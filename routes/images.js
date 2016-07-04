"use strict;"


let express = require('express');
let mongoose = require('mongoose');
let Image = require('../models/image');

let router = express.Router();

router.route('/show/:imageId')
.get(function(req,res){
	Image.findById(req.params.imageId, (err,image) => {
		res.status((err || !image)? 400:200).send(err || image);
	});
});

router.route('/:imageId')
.delete(function(req,res){
		console.log('delid', req.params.imageId);
	Image.findByIdAndRemove(req.params.imageId, err => {
		res.status(err? 400:200).send(err);
	});
});



router.route('/:albumId')
.get(function(req,res){
	Image.find({album:req.params.albumId}, (err,image) => {
		res.status((err || !image)? 400:200).send(err || image);
	});
});

router.route('/')
.post(function(req,res){
	let image = new Image(req.body);
	image.save((err,savedImage) => {
		res.status(err? 400:200).send(err || savedImage);
	});
});


module.exports = router;

