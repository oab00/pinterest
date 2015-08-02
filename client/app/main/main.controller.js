'use strict';

angular.module('pinterestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pictures = [];

    $http.get('/api/things').success(function(pictures) {
      $scope.pictures = pictures;
    });

    $scope.addPicture = function() {
      if($scope.newPicture === '') {
        return;
      }
      $http.post('/api/things', { url: $scope.newPicture });
      $scope.pictures.push({ url: $scope.newPicture });
      $scope.newPicture = '';
    };

    $scope.deletePicture = function(picture) {
      $http.delete('/api/things/' + picture._id);
    };
  });
