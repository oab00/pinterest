'use strict';

angular.module('pinterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:user', {
        templateUrl: 'app/collection/collection.html',
        controller: 'CollectionCtrl'
      });
  });
