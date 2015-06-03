
var bdapp = angular.module('bdapp',['ngRoute']);

bdapp.config(appConfig);

bdapp.controller('navbarController', ['$scope', '$http', '$interval',function($scope, $http, $interval) {
	// $interval(function(){
	// 	getTemp();
	// },300);
	$scope.getTemp = function(){
		$http.get('/temp').success(function(data){	
			console.log(data);
			$scope.temp_data = data;
			console.log("END of success ----------------------");
		}).error(function(data, status, headers, err){
			console.log('Data is here: ' + data);
			console.log('Status:  ' + status);
			console.log('Headers: '+  headers);
			console.log('Error : ' + err);

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
	$scope.tests = [{
						header: 'Moderate Accuracy Test',
						description: 'Car sunroof manual control of the sensor platform. Will give a moderate idea of the linearity of the chosen pressure sensor.',
						plan: 'Using a car, to simulate wind at roughly the speed that the car is going.',
						expectation:'To get a rough estimate of our sensor to see if it has a linear increase in the differential as the wind pressure increases. ',
						result:'At low speeds, 0-10 mph, the sensor was giving poor readings. Once the car got above 10 mph, the sensor began reading appropriately for the speed of the vehicle.',
						graph: './pictures/cartestpic.png'
					},
					{
						header: 'Wind Tunnel Test',
						description: 'Accuracy Testing for the pressure sensor with rotor wash.',
						plan: 'To use a known pressure created by the wind tunnel to gauge the output of our sensor. We will test the sensor with differing levels of interference from the rotors of a drone to simulate the real world. We will increase the pressure being applied to our sensor so that we can verify when the sensor is accurate and when it is inaccurate for each level of rotor speed.',
						expectation: 'From the moderate accuracy test we know that our sensing of speeds below 10 mph is not correct so we will show that in our tests. Between 10-40 mph, we expect to see mostly accurate data with the exception of a few outliers that exist in most sensors.',
						result: 'Tests at vary Drone\'s Throttle speeds',
						graph:'./pictures/windTableResult.PNG'
					}];
	$scope.windtunnels = [{title: 'Wind tunnel test - Drone at 40% Throttle, 15mi/hr - 40mi/hr',
							graph: './pictures/tun2-40-percent-throttle.png'},
							{title: 'Wind tunnel test - Drone at No Wash, 30mi/hr - 60mi/hr',
							graph: './pictures/tun3-30-60-no-wash.png'}];
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