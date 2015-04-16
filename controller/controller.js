var bdapp = angular.module('bdapp',['ngRoute']);

bdapp.config(appConfig);

bdapp.controller('navbarController', ['$scope', function($scope) {

$scope.getStream = function() {
		$scope.msg = "This is a stream";
	};

}]);

function appConfig($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: '/view/datastream.html',
		controller: 'navbarController'
	}).when('/background', {
		templateUrl: '/view/background.html',
		controller: 'navbarController'
	}).when('/background', {
		templateUrl: '/view/background.html',
		controller: 'navbarController'
	});
}

//https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating