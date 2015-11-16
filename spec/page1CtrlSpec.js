describe('Page 1 Controller', function() {
	var $controller;
	beforeEach(function() {
		module('app');
		inject(function(_$controller_) {
			$controller = _$controller_;
		});
	});

	describe('$scope.greaterThan', function() {
		it("Says whether or not x > y", function() {
			var $scope = {};
			var controller = $controller('page1Ctrl', {$scope: $scope});

			expect($scope.greaterThan(0,1)).toEqual(false);
			expect($scope.result).toEqual('NO!');
			expect($scope.greaterThan(1,1)).toEqual(false);
			expect($scope.result).toEqual('NO!');
			expect($scope.greaterThan(2,1)).toEqual(true);
			expect($scope.result).toEqual('YES!');
		});
	});
});
