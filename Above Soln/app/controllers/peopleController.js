 aboveSolnApp.controller("peopleController", ['$scope', '$http', 'aboveService', '$location', function($scope, $http, aboveService, $location){
	 
	 $scope.people = undefined;

	 aboveService.getAllPeople($scope);
	 
	
 }]);
