// IIFE - Immediately Invoked Function Expression
(function(yourcode){
  // The global jQuery object is passed as a parameter
	yourcode(window.jQuery, window, document);
}(function($, window, document){
  // The $ is now locally scoped 
	// Listen for the jQuery ready event on the document
	$(function(){ // The DOM is ready!
		var tblCell = $("td.tdR");
		tblCell.on("click", function() {
			var curTD = $(this);
			var curRD = curTD.find('input[type=radio]');
			var grID = curRD.attr('id');
			var grName = curRD.attr('name');
			var teGrp = grName;
			if (grName.indexOf('M') == -1) { // don't have 'M' in grName
				teGrp = grName.replace('L', 'M');
			} else {
				teGrp = grName.replace('M', 'L');
			}
			var othRD = curTD.parent().find('input[type=radio][name='+teGrp+'][id='+grID+']');
			var getAttr = othRD.is(':checked');
			if (getAttr){
				othRD.prop('checked', false);
			}
			curRD.prop('checked', true);
		});
		
		$("#mainForm").submit(function() {
			var fail = false;
			$('input[type="radio"]:not(:checked)').each(function(){
				if(!$('input[type=radio][name='+this.name+']').is(':checked')){
					alert('Please answer '+this.name);
					fail = true;
					return false
				}
			});
			if(!fail)
				alert('This is just a demo!');
			return false
		});
	});
	// The rest of code goes here!
}));

