(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"ui.bootstrap",
		"ngAnimate",
        "ngSanitize",
        "home",
        "widget"
	]);
	
	myApp.filter("visible", ["people", function (people) {
	    return function (data, query) {
	        if (data) {
	            if (query == "all")
	                return data;
	            var op = [];
	            data.forEach(function (item) {
	                if (!item.visibleTo || (item.visibleTo && !item.visibleTo.length) || (item.visibleTo && item.visibleTo.indexOf(query) != -1))
	                    op.push(item);
	            });
	            return op;
	        }
	        return [];
	    };
	}]);
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();