(function(){
	
	var module = angular.module("widget");
	
	module.controller("widgetController", ["$uibModal", "$stateParams", "widgetService", "templates", function ($uibModal, $stateParams, widgetService, templates) {
	    var vm = this;
	    vm.name = "widget";
	    vm.person = $stateParams.type;
	    vm.templates = templates;
	    if (!vm.template)
	        vm.template = "default";
        vm.showMedia = function (evt) {
            $uibModal.open({
                template: '<img src="' + evt.target.currentSrc + '" class="width-100"/>'
            });
        }
	}]);
	
})();