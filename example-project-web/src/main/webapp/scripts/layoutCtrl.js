angular.module('exampleApp').controller('layoutCtrl', ['$scope','$state', 'User', function ($scope, $state, User) {

	// If root go to users
	$state.go("layout.users");
	
}]);
