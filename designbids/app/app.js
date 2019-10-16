 var designBidsApp = angular.module("designBidsApp", ['ngRoute']);
 
designBidsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);