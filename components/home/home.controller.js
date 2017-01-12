(function(){
	
	var module = angular.module("home");
	
	module.controller("homeController", ["$stateParams", "homeService", "config", function ($stateParams, homeService, config) {
		var vm = this;
		vm.name = "home";
		vm.person = $stateParams.type;
		vm.config = config;
	}]);
	
})();