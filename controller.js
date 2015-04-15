var myApp = angular.module('bdapp',[]);

myApp.controller('navbarController', ['$scope', function($scope) {

$scope.enC = function(text, key){
	$scope.t1 = 'test1';
};
 $scope.deC = function(text, key){
	$scope.t2 = 'test2';
};

}]);

