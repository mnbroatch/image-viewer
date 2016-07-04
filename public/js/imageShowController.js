"use strict;"

angular.module('appName')
.controller('imageShowController', function($scope,$http,$stateParams,imageService) {

	imageService.getOne($stateParams.imageId)
	.then( function(image){
		if(image) $scope.imageToShow = image;
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

});



