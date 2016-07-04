"use strict;"

angular.module('appName')
.controller('albumsController', function($scope,$http,albumService) {

	$scope.albumArray =[];

	albumService.getAll()
	.then( function(albums){
		if(albums) $scope.albumArray.push(...albums);
	})
	.catch( err => {
		console.log(err);
	});



	$scope.addOneAlbum = function(album){
		albumService.addOne(album)
		.then( function(newAlbum){
			if(newAlbum) $scope.albumArray.push(newAlbum);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.removeOneAlbum = function(album){
		let index = $scope.albumArray.indexOf(album);
		albumService.removeOne(album)
		.then( function(){
			$scope.albumArray.splice(index,1);
		})
		.catch( err => {
			console.log(err);
		});
	}

	//  assumes uuid that doesn't change on edit
	$scope.editOneAlbum = function(editedAlbum){
	console.log(editedAlbum);
		albumService.editOne(editedAlbum)
		.then( function(updatedAlbum){
			console.log('edited');
		})
		.catch( err => {
			console.log(err);
		});
	}


});



