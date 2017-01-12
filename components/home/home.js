(function(){
	
	var module = angular.module("home", ["ui.router"]);
	
	module.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "home",
			url: "/home/:type",
			template: "<home></home>",
		});
		$urlRouterProvider.otherwise("/home/all");
	}]);
	
	
})();