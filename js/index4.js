var app = angular.module('customDirectiveApp', ['ngSanitize', 'ui.bootstrap', 'custom.checkboxUI']);

CheckboxGroupCtrl = function($scope) {
	$scope.sliderValue = 3;

	$scope.data = [
		{ID:'1', text:'Apple', select:false},
		{ID:'2', text:'Orange', select:false},
		{ID:'3', text:'Banana',	select:false},
		{ID:'4', text:'Pineapple', select:false},
		{ID:'5', text:'Watermelon', select:false},
		{ID:'6', text:'Avocado', select:false},
		{ID:'7', text:'Kiwi', select:false}];
	$scope.list1 = [];	
}

angular.module('custom.checkboxUI', []) // need a better name for this module :P
.directive("checkboxGroup", function() {
	var editorTemplate = 
			'<ul class="unstyled">'+
				'<li ng-repeat="entry in model">'+
					'<input type="checkbox" ng-model="entry.select" class="{{xclass}}"> {{entry.text}}'+
				'</li>'+
			'</ul>';
	var counter = 0;
	var select_list = [];
	
	return {
		restrict: "E",
		scope: {
			model: "=",
			mlist: "=",
			max:   "@",
			xclass: "@",
		},
		replace: true,
		transclude: false,
		template: editorTemplate,
		link: function (scope, element, attrs) {
		
			for (var i = 0; i < scope.model.length; i++) {
					if(scope.model[i].select) { select_list.push(i); scope.mlist.push(i);}
					counter += (scope.model[i].select) ? 1 : 0;
			}
			
      // when array changes, update text in directive
      scope.$watch("model", function(newVal, oldVal, scope) {
				for (var i = 0; i < scope.model.length; i++) {
					if(oldVal[i].select ^ newVal[i].select) {
						if(newVal[i].select) {
							select_list.push(i);
							scope.mlist.push(i);
							counter += 1;
						} else {
							counter -= 1;
							var loc = scope.mlist.indexOf(i);
							console.log('i: '+i+'  loc: '+loc);
							if(loc >= 0) {								
								scope.mlist.splice(loc, 1);
								select_list.splice(loc, 1);
								scope.model[i].select = false;
							}
						}
					}
				}

				if(counter > scope.max){
					removed = select_list.shift();
					scope.mlist.shift();
					scope.model[removed].select = false;
				}				
      }, true);
    }
	}
});	

var AlertCtrl = function ($scope) {
  $scope.alerts = [
    { type: 'info', msg: "view page source / inspect element to see how it's done." }
  ];
	
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}