describe('Page 2 Controller', function() {
	var $controller;
	beforeEach(function() {
		module('app');
		inject(function(_$controller_) {
			$controller = _$controller_;
		});
	});

	describe('$scope.title', function() {
		it('should be \'Hello Page 2\'', function() {
			var $scope = {};
			var controller = $controller('page2Ctrl', {$scope: $scope});

			expect($scope.title).toEqual('Hello Page 2!');
		});
	});
});
