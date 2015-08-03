'use strict';

angular.module('pinterestApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $routeParams, $timeout) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
      location.reload();
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    var user = $scope.getCurrentUser();

    function checkLogin() {
      if (user.name) {
        $scope.menu.push({
          'title': 'My Collection',
          'link': '/c/' + user.name
        });
      }

      if ($routeParams.user && $routeParams.user !== user.name) {
        $scope.menu.push({
          'title': $routeParams.user + '\'s Collection',
          'link': '/c/' + $routeParams.user
        });
      }
    }

    $timeout(checkLogin, 50);

  });