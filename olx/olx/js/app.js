 var olxApp = angular.module("olxApp", []);
 
 olxApp.controller("categories", function($scope, $http){
	 $scope.hideChild1=false; 
	 $scope.hideChild2=false;
	 
	 $scope.categoriesJSON = undefined; 
	 
	 $scope.getCategoriesFromJSONFile = function(){
		$http.get('data/categories.json').success(function(data){
			$scope.categoriesJSON = data.categories;
			console.log(data);
		})
	 }
	 
	$scope.getCategoriesFromJSONFile();
	 console.log("test wait");
	 
	 $scope.toggleHide = function($event){
		 var element = $event.target;
		var child = $(element).find(".children");
		if($(child).css(display)!= "hidden"){
			child.hide();
		}
		else
			child.show();
	 }
	 
 });
 
 


