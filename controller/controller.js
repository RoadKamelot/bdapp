
var bdapp = angular.module('bdapp',['ngRoute']);

bdapp.config(appConfig);

bdapp.controller('navbarController', ['$scope', '$http', '$interval',function($scope, $http, $interval) {
	// $interval(function(){
	// 	getTemp();
	// },300);
	$scope.getTemp = function(){
		$http.get('/temp').success(function(data){	
			$scope.temp_data = data;
		}).error(function(){
			console.log("Error while getting data from app.js to controller, cant get /temp from http in dronedbAccessor");
		});
	};
	$scope.sponsors = [{name: 'Bob Landowski',
						role: 'Laboratory Support Engineer',
						icon: './pictures/bob.jpg',
						url: 'http://directory.tacoma.uw.edu/employee/ski0'},
						{name: 'Orlando Baiocchi, Ph.D.',
						role: 'Endowed Professor',
						icon: './pictures/ob.jpg',
						url: 'http://directory.tacoma.uw.edu/employee/baiocchi'}];

	$scope.members = [{name: 'Chris Barrett',
						major: 'CSS/CES',
						icon: './pictures/Chris.PNG',
						linkedin: 'https://www.linkedin.com/in/barrettcm'},
						{name: 'Eric Yee',
						major: 'CSS/CES',
						icon: './pictures/Eric.PNG',
						linkedin: 'https://www.linkedin.com/pub/eric-yee/92/61b/b3'},
						{name: 'Khanh Nguyen',
						major: 'CSS/CES ',
						icon: './pictures/kon.jpg',
						linkedin: 'https://www.linkedin.com/in/konnguyen6'},
						{name: 'Brendon Crawford',
						major: 'CES',
						icon: './pictures/brendon.PNG',
						linkedin: 'https://www.linkedin.com/pub/brendan-crawford/b9/461/79'} ];
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
};