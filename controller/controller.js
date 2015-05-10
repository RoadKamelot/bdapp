var bdapp = angular.module('bdapp',['ngRoute']);

bdapp.config(appConfig);

bdapp.controller('navbarController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
	// getTemp();
	// $interval(function(){
	// 	getTemp();
	// },300);
	$scope.getTemp = function(){
		// function getTemp(){
		//$scope.temp_data = "70F buddy";
		$http.get('/temp').success(function(data){
			$scope.temp_data = data;
		}).error(function(){
			console.log("Error while getting data from app.js to controller");
		});
	}

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

