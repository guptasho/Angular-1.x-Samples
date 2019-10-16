aboveSolnApp.service('aboveService', [ '$http', function($http){

	this.getAllPeople = function($scope){

		$http.get("data/people.json").
		success(function(data){
			$scope.people = data.people;
			console.log(data);
		}).error(function(error){
			alert("not able to retrieve data; check console or use firefox");
		});
	}
}])