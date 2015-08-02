'use strict';

angular.module('pinterestApp')
  .controller('CollectionCtrl', function ($scope, $routeParams, $http, Auth) {
    
    $scope.pictures = [];
    $scope.title = '';

    var user = Auth.getCurrentUser();
    var collectionUser = $routeParams.user;

    if (collectionUser === user.name) {
    	$scope.title = 'My Collection';
    } else {
    	$scope.title = collectionUser + '\'s Collection:';
    }

    $http.get('/api/things').success(function(pictures) {
    	// change this to a specific api call
      $scope.pictures = pictures.filter(function(picture) {
      	return picture.user.name === collectionUser;
      });
    });
    
    $scope.addPicture = function() {
      if($scope.newPicture === '') {
        return;
      }
      $http.post('/api/things', { user: user, url: $scope.newPicture });
      $scope.pictures.push({ user: user, url: $scope.newPicture });
      $scope.newPicture = '';
    };

    $scope.deletePicture = function(picture) {
      $http.delete('/api/things/' + picture._id);
    };

  });
