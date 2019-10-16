designBidsApp.controller('loginController',['$rootScope', '$scope', 'loginService', '$location', function($rootScope, $scope, loginService, $location){

$scope.login= [];

$scope.authenticateUser = function(){
	if(loginService.authenticateUser($scope.login)){
		$rootScope.username = $scope.login.username;
		$rootScope.isLoggedIn = true;
		$location.path("/home");
	} else{
		alert("invalid login!!")
	}

}

}])