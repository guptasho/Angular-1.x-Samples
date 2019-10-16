aboveSolnApp.controller('page2Controller', ['$scope', '$location', function($scope, $location){
	
	$scope.goHome = function(){
		$location.path("/");
	}
}])