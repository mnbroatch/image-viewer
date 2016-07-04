"use strict;"

angular.module('appName')
.service('albumService', function($http){


	this.getAll = () => {
		return $http({
			method:'GET',
			url: '/api/albums'
		})
		.then( res => {
			if (res.data.length)
				return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.addOne = (album) => {
		return $http({
			method:'POST',
			url: '/api/albums',
			data: album
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}

	this.removeOne = (album) => {
		return $http({
			method:'DELETE',
			url: '/api/albums/' + album._id
		});
	}

	this.editOne = (album) => {
		return $http({
			method:'PUT',
			url: '/api/albums/' + album._id,
			data: album
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}
})
.service('imageService', function($http){


	this.getAll = () => {
		return $http({
			method:'GET',
			url: '/api/images'
		})
		.then( res => {
			if (res.data.length)
				return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.getAllInAlbum = (albumId) => {
		return $http({
			method:'GET',
			url: '/api/images/' + albumId
		})
		.then( res => {
			if (res.data.length)
				return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.getOne = (imageId) => {
		return $http({
			method:'GET',
			url: '/api/images/show/' + imageId
		})
		.then( res => {
			return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.addOne = (image) => {
		return $http({
			method:'POST',
			url: '/api/images',
			data: image
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}

	this.removeOne = (image) => {
		return $http({
			method:'DELETE',
			url: '/api/images/' + image._id
		});
	}

	this.editOne = (image) => {
		return $http({
			method:'PUT',
			url: '/api/images/' + image._id,
			data: image
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}


});


