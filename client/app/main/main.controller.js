'use strict';

angular.module('pinterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.pictures = [];

    $scope.loggedIn = Auth.isLoggedIn();

    $http.get('/api/things').success(function(pictures) {
      $scope.pictures = pictures;
    });

    $scope.addPicture = function() {
      if($scope.newPicture === '') {
        return;
      }
      $http.post('/api/things', { url: $scope.newPicture })
          .success(function(picture) {
            $scope.pictures.push(picture);
            $scope.newPicture = '';
            $scope.$emit('masonry.layout()');
          });
      // TODO: .error  and  placeholder image
      
    };

    $scope.deletePicture = function(index) {
      $http.delete('/api/things/' + $scope.pictures[index]._id)
          .success(function() {
            $scope.pictures.splice(index, 1);
          });
    };
    
    

  });
