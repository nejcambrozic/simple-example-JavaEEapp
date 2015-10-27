angular.module('exampleApp')
	.controller('userDetailsCtrl', ['$scope','$stateParams','User', function ($scope, $stateParams, User) {
	
	User
		.getUserDetails({id: $stateParams.userId}).$promise
            .then(function (data) {
                $scope.user = data;
            }, function (error){
                console.log(error);
            });
	
}]);
