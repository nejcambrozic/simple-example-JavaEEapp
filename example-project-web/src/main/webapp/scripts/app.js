'use strict';

var app = angular.module('exampleApp', [
    'ui.router',
    'ngTable',
    'ngResource'
  ]);

app.config(['$stateProvider','$urlRouterProvider','$resourceProvider', function ($stateProvider,$urlRouterProvider,$resourceProvider) {

 $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('layout',{
      url: '/',
      templateUrl: "scripts/layout.html",
      controller: 'layoutCtrl'

    })
    .state('layout.users',{
      url: 'users',
      templateUrl: "scripts/users/users.html",
      controller: 'usersCtrl'

    })
    .state('layout.userDetails',{
      url: 'users/:userId',
      templateUrl: 'scripts/userDetails/userDetails.html',
      controller: 'userDetailsCtrl'
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