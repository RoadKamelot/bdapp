var bdapp = angular.module('bdapp',['ngRoute']);

bdapp.config(appConfig);

bdapp.controller('navbarController', ['$scope', function($scope) {

$scope.getStream = function() {
		$scope.msg = "This is a stream";
	};

}]);

function appConfig($routeProvider){
	$routeProvider.when('/',{
		templateUrl: '/view/datastream.html',
		controller: 'navbarController'
	}).when('/home',{
		templateUrl: '/view/datastream.html',
		controller: 'navbarController'
	}).when('/background', {
		templateUrl: '/view/background.html',
		controller: 'navbarController'
	}).when('/sensors', {
		templateUrl: '/view/sensors.html',
		controller: 'navbarController'
	}).when('/team', {
		templateUrl: '/view/team.html',
		controller: 'navbarController'
	}).when('/contacts', {
		templateUrl: '/view/contacts.html',
		controller: 'navbarController'
	}).when('/test', {
		templateUrl: '/view/test.html',
		controller: 'navbarController'
	});
}

