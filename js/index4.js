function DataCtrl($scope) {
	$scope.data1 = [
		{no:1, text1:'I see myself as a gentle person', valueM1:'TR1', valueL1:'TR1', id1:'op1',
					 text2:'I am very persuasive', valueM2:'SQ2', valueL2:'N2', id2:'op2',
					 text3:'I am a very modest type', valueM3:'ST3', valueL3:'ST3', id3:'op3',
					 text4:'I often come up with original ideas', valueM4:'N4', valueL4:'Z4', id4:'op4',
					 nameM:'Q1-M', nameL:'Q1-L'},
		{no:2, text1:'People enjoy my company', valueM1:'SQ1', valueL1:'SQ1', id1:'op5',
					 text2:'I often introspect and evaluate myself', valueM2:'ST2', valueL2:'ST2', id2:'op6',
					 text3:'I am stubborn, do not easily give up', valueM3:'Z3', valueL3:'Z3', id3:'op7',
					 text4:'I tend to be a kind and nice person', valueM4:'N4', valueL4:'TR4', id4:'op8',
					 nameM:'Q2-M', nameL:'Q2-L'},					 
		];
		

	$scope.submitForm = function() {
    alert('This is just a demo!');
  };
}