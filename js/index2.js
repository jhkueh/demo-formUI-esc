var app, DataCtrl;
app = angular.module('sliderInput', []);

DataCtrl = function($scope) {
	$scope.data1 = [
		{name:'Q1', text:'1. Quickly and accurately identifies good and evil and hates evil.', value: 0},
		{name:'Q2', text:'2. Sees everything as either black or white; no gray or indefinite areas.', value: 0},
		{name:'Q3', text:'3. Easily perceives the character of individuals or groups.', value: 0},
		{name:'Q4', text:'4. Encourages repentance that produces good fruit.', value: 0},
		{name:'Q5', text:'5. Believes the acceptance of difficulties will produce positive personal brokenness.', value: 0},
		{name:'Q6', text:'6. Has only a few or no close friendships.', value: 0}];
		
	$scope.data2 = [
		{name:'Q7', text:'7. Views the Bible as the basis for truth, belief, action, and authority.', value: 0},
		{name:'Q8', text:'8. Boldly operates on spiritual principles.', value: 0},
		{name:'Q9', text:'9. Is frank, outspoken, and doesn’t mince words.', value: 0},
		{name:'Q10', text:'10.	Is very persuasive in method of speaking.', value: 0},
		{name:'Q11', text:'11. Grieves deeply over the sins of others.', value: 0},
		{name:'Q12', text:'12.	Is eager to see his own blind spots and help others to see theirs too.', value: 0}];

	$scope.submitForm = function() {
    alert('This is just a demo!');
  };
};

// app.directive('wholeNumber', function() {
    // return {
        // link: function(scope, elem, attrs) {
            // elem.on("blur", function() {
                // var num = Math.abs(parseInt(elem.val(), 10));
                // // num = num > scope.maxValue ? 0 : num;
                // scope.data1.value = num;
                // scope.$apply(); // update view
            // });
        // }
    // };
// });