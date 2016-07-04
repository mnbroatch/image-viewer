"use strict;"

var app = angular.module('appName', ['ui.bootstrap','ui.router','xeditable']); 
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('albums', {url: '/albums', templateUrl: 'html/albums.html', controller: 'albumsController'})
      .state('images', {url: '/images/:albumId', templateUrl: 'html/images.html', controller: 'imagesController'})
      .state('imageShow', {url: '/imageShow/:imageId', templateUrl: 'html/imageShow.html', controller: 'imageShowController'})

    $urlRouterProvider.otherwise('/albums');

});

