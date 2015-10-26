angular.module('exampleApp').controller('usersCtrl', ['$scope','$stateParams','User', function ($scope, $stateParams, User) {

	/*console.log("users loaded");
	console.log($stateParams);
	$scope.userId = $stateParams.userId;
	console.log($scope.userId);
	*/
	User.getUserDetails({id: $stateParams.userId}).$promise
            .then(function (data) {
                $scope.user = data;
                console.log(data);
            }, function (error){
                //toastr.error($rootScope.$strings.messages.utils.tryAgain, $rootScope.$strings.messages.errors.somethingWrong);
                console.log(error);
            });

}]);
