'use strict';

angular.module('pinterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $timeout) {
    $scope.pictures = [];

    $scope.loggedIn = Auth.isLoggedIn();
    $timeout(function() { $scope.loggedIn = Auth.isLoggedIn(); }, 50);
    var user = Auth.getCurrentUser();

    $scope.usernames = [];
    $scope.filterSelected = false;

    var allPictures = [];

    $http.get('/api/things').success(function(pictures) {
      $scope.pictures = pictures;
      allPictures = pictures;

      var temp = pictures.map(function(picture) {
        return picture.user.name;
      }).forEach(function(tmp) {
        if ($scope.usernames.indexOf(tmp) === -1) {
          $scope.usernames.push(tmp);
        }
      });
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

          if ($scope.usernames.indexOf(picture.user.name) === -1) {
            $scope.usernames.push(picture.user.name);
          }
      });
    };

    $scope.filterSelect = function(index) {
      $scope.pictures = allPictures;
      
      $scope.filterSelected = $scope.usernames[index];
      $scope.pictures = $scope.pictures.filter(function(picture) {
        return picture.user.name === $scope.usernames[index];
      }); 
    };

    $scope.clearFilter = function() {
      $scope.pictures = allPictures;
      $scope.filterSelected = false;
    };

  });
