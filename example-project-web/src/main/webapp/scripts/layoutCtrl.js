angular.module('exampleApp').controller('layoutCtrl', ['$scope','$state', 'User', function ($scope, $state, User) {

	$scope.users =  [{name: "Moroni", age: 50, id:1},{name: "Kakao", age: 22, id:2} ];
	$scope.test = "haha";
	console.log("layout loaded");

	$scope.goToDetails = function(id){
		console.log(id);
		$state.go("userDetails",{ userId: id});
	}

	  User.getUsers()
            .$promise
            .then(function (data) {
                $scope.users = data;
                console.log(data);
            }, function (error){
                //toastr.error($rootScope.$strings.messages.utils.tryAgain, $rootScope.$strings.messages.errors.somethingWrong);
                console.log(error);
            });


}]);
