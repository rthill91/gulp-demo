angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/page1');

	$stateProvider
		.state('page1', {
			url: '/page1',
			controller: 'page1Ctrl',
			templateProvider: function($templateCache) {
				return $templateCache.get('page1.tmpl.html')
			}
		})
		.state('page2', {
			url: '/page2',
			controller: 'page2Ctrl',
			templateProvider: function($templateCache) {
				return $templateCache.get('page2.tmpl.html')
			}
		})
}]);
