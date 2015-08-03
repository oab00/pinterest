'use strict';

angular.module('pinterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.pictures = [];

    $scope.loggedIn = Auth.isLoggedIn();
    var user = Auth.getCurrentUser();

    $http.get('/api/things').success(function(pictures) {
      $scope.pictures = pictures;
    });

    $scope.addPicture = function() {
      if($scope.newPicture === '') {
        return;
      }
      $http.post('/api/things', { 
        url: $scope.newPicture,
        user: user
      }).success(function(picture) {
          $scope.pictures.push(picture);
          $scope.newPicture = '';
      });
      // TODO: .error  and  placeholder image
    };

    $scope.deletePicture = function() {
      console.log('lol');
    };
  });
