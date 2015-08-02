'use strict';

angular.module('pinterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/collection', {
        templateUrl: 'app/collection/collection.html',
        controller: 'CollectionCtrl'
      });
  });
