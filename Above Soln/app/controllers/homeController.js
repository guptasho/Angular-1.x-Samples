aboveSolnApp.controller('homeController', ['$scope', '$location', function($scope, $location){
	
	$scope.goToPeopleView = function(){
		$location.path("/page2");
	}
}])