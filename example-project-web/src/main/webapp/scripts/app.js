'use strict';

var app = angular.module('exampleApp', [
    'ui.router',
    'ngTable',
    'ngResource'
  ]);

app.config(['$stateProvider','$urlRouterProvider','$resourceProvider', function ($stateProvider,$urlRouterProvider,$resourceProvider) {

 $urlRouterProvider.otherwise('/users');

  $stateProvider
    .state('layout',{
      url: '/users',
      templateUrl: "scripts/layout.html",
      controller: 'layoutCtrl'

    })
    .state('userDetails',{
      url: '/:userId',
      templateUrl: 'scripts/users/users.html',
      controller: 'usersCtrl'
    })
    
}]);

app.factory('User', ['$resource', function($resource) {
 return $resource(
    'http://localhost:8080/example-project-rest/users/:id',
    {
        id: '@id',
    },
    {
        getUsers: {
            method: 'GET',
            isArray: true
        },
        
        getUserDetails: {
            method: 'GET'
        },
    }
  );
}]);