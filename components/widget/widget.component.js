(function(){
	var module = angular.module("widget");
	
	module.component("widget", {
		templateUrl: "components/widget/widget.html",
		controller: "widgetController",
		bindings: {
		    "title": "<",
		    "content": "<",
		    "gallery": "<",
		    "sections": "<",
		    "template": "@",
            "image": "<"
		},
        bindToController: true,
		controllerAs: "vm"
	});
})();