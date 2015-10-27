angular.module('exampleApp')
	.controller('usersCtrl', ['$scope','$state', 'User', 'ngTableParams', '$filter', function ($scope, $state, User, ngTableParams, $filter) {


	User.getUsers()
        .$promise
        .then(function (data) {
            $scope.users = data;
			
			$scope.tableParams = new ngTableParams({
		        page: 1,            // show first page
		        count: 10,          // count per page
		        sorting: {
		            username: 'asc'     // initial sorting
		        },
		        filter: {
		            firstName:'' 
		        }
		    	}, {
		        total: data.length, // length of data
		        getData: function($defer, params) {
		            // use build-in angular filter
		            var filteredData = params.filter() ?
		                                $filter('filter')(data,  params.filter()) :
		                                data;
		            var orderedData = params.sorting() ?
		                   				$filter('orderBy')(filteredData,params.orderBy()) :
		      	             			data;

		            params.total(orderedData.length); // set total for recalc pagination
	            	$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));	            	
		        }
		    });

        }, function (error){
            console.log(error);
        });


	$scope.goToDetails = function(id){
		$state.go("layout.userDetails",{ userId: id});
	}

	  

}]);
