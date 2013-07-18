var app, DataCtrl;
app = angular.module('sliderInput', []);

DataCtrl = function($scope) {
	$scope.data1 = [
		{name:'Q1', text:'1. Mechanical aptitude – understand apply the principles of mechanics / physics.', value:0, natural:false, gifted:false},
		{name:'Q2', text:'2. Operating heavy equipment, driving, piloting – includes construction equipment as well as transportation vehicles.', value:0, natural:false, gifted:false},
		{name:'Q3', text:'3. Manual dexterity – skill and ease at using one’s hands or fine tools.', value:0, natural:false, gifted:false},
		{name:'Q4', text:'4. Building mechanical / structural devices – design and/or assemble materials as well as execute repairs.', value:0, natural:false, gifted:false},
		{name:'Q5', text:'5. Physical coordination – using multiple muscle movements ot a single end, such as needed in athletics, skilled trades, etc.', value:0, natural:false, gifted:false},
		{name:'Q6', text:'6. Organizing supplies or implements – identify methods that lead to ease of retrieval and maintenance.', value:0, natural:false, gifted:false},
		{name:'Q7', text:'7. Taking physical risks – attracted to activities or occupations with elements of physical danger.', value:0, natural:false, gifted:false},
		{name:'Q8', text:'8. Emotional stability, reliability – react impersonally to situations and thereby stay on course.', value:0, natural:false, gifted:false}];
	$scope.data2 = [
		{name:'Q9', text:'9. Inventing – imagine or produce something, especially in technical, scientific, or theoretical realms.', value:0, natural:false, gifted:false},
		{name:'Q10', text:'10. Researching – investigate or experiment to get knowledge, examine theories, or find new applications of current knowledge.', value:0, natural:false, gifted:false},
		{name:'Q11', text:'11. Conceptualising – originate and develop abstract ideas or theories.', value:0, natural:false, gifted:false},
		{name:'Q12', text:'12. Working independently – work well without guidance or input from others.', value:0, natural:false, gifted:false},
		{name:'Q13', text:'13. Solving complex problems – find solutions to difficult situations or unique issues, usually through logic.', value:0, natural:false, gifted:false},
		{name:'Q14', text:'14. Computer aptitude – computer skills or systems and software design and development.', value:0, natural:false, gifted:false},
		{name:'Q15', text:'15. Synthesizing information – organise or combine information from different sources so that it is easily understood.', value:0, natural:false, gifted:false},
		{name:'Q16', text:'16. Theorising – articulate explanations, find connections, or project future trends.', value:0, natural:false, gifted:false}];

	$scope.checkSlider = function($event, natural, gifted) {
		var slider = $event.target;
		gifted = ( slider.value > 2 && natural ) ? true: false;
  };
		
	$scope.checkBox = function($event, sValue, gifted) {
		var checkbox = $event.target;
		gifted = ( checkbox.checked && sValue>2 ) ? true: false;
  };
	
	$scope.submitForm = function() {
		alert('This is just a demo!');
  };
}