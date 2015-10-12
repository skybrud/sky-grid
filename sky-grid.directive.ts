(function() {
	
	angular.module('skyGrid').directive('skyGrid', skyGridDirective);
	
	skyGridDirective.$inject = ['skyPath'];
	
	function skyGridDirective(skyPath) {
		var directive = {
			restrict:'E',
			scope: {
				content: '='
			},
			templateUrl:'/sky-grid/sky-grid.template.html',
			link:link
		};
		
		function link(scope, element, attrs) {
			scope.skyPath = skyPath.get();
		}
		
		return directive;
	}
	
})();