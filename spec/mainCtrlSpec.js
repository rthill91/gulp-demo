describe('Main Controller', function() {
	var $controller;
	beforeEach(function() {
		module('app');
		inject(function(_$controller_) {
			$controller = _$controller_;
		});
	});

	describe('$scope.title', function() {
		it('should be \'Hello Main\'', function() {
			var $scope = {};
			var controller = $controller('mainCtrl', {$scope: $scope});

			expect($scope.title).toEqual('Hello Main');
		});
	});
});
