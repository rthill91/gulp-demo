angular.module('app')
.controller('page1Ctrl', ['$scope', function($scope) {
	$scope.title = "Hello Page 1!";
	$scope.inputComparison = {
		x: 0,
		y: 0
	};
	$scope.result = "";

	$scope.greaterThan = function(x, y) {
		if(x > y) {
			$scope.result = "YES!";
			return true;
		} else {
			$scope.result = "NO!";
			return false;
		}
	};
}]);
