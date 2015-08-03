'use strict';

angular.module('pinterestApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $routeParams) {
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
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    var user = $scope.getCurrentUser();

    if (user.name) {
      $scope.menu.push({
        'title': 'My Collection',
        'link': '/' + user.name
      });
    }

    if ($routeParams.user && $routeParams.user !== user.name) {
      $scope.menu.push({
        'title': $routeParams.user + '\'s Collection',
        'link': '/' + $routeParams.user
      });
    }

  });