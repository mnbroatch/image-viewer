"use strict;"

angular.module('appName')
.controller('imagesController', function($scope,$http,$stateParams,imageService) {

	$scope.imageArray =[];

console.log('	$stateParams.albumId',	$stateParams.albumId);
	imageService.getAllInAlbum($stateParams.albumId)
	.then( function(images){
		if(images) $scope.imageArray.push(...images);
	})
	.catch( err => {
		console.log(err);
	});

	$scope.addOneImage = function(image){
		image.album = $stateParams.albumId;
		imageService.addOne(image)
		.then( function(newImage){
			if(newImage) $scope.imageArray.push(newImage);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.removeOneImage = function(image){
		let index = $scope.imageArray.indexOf(image);
		imageService.removeOne(image)
		.then( function(){
			$scope.imageArray.splice(index,1);
		})
		.catch( err => {
			console.log(err);
		});
	}

	//  assumes uuid that doesn't change on edit
	$scope.editOneImage = function(editedImage){
	console.log(editedImage);
		imageService.editOne(editedImage)
		.then( function(updatedImage){
			console.log('edited');
		})
		.catch( err => {
			console.log(err);
		});
	}


});



