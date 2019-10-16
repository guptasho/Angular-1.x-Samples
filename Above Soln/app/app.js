 var aboveSolnApp = angular.module("aboveSolnApp", ['ngRoute']);
 
aboveSolnApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      }).
      when('/page2', {
        templateUrl: 'partials/page2.html',
        controller: 'page2Controller'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);