	$("td#tdR").click(function () {
		var grID = $(this).find('input:radio').attr('id');
		var grName = $(this).find('input:radio').attr('name');
		var teGrp = grName;
		if (grName.indexOf('M') == -1) { // don't have 'M' in grName
			teGrp = grName.replace('L', 'M');
		} else {
			teGrp = grName.replace('M', 'L');
		}
		var getAttr = $(':radio[name='+teGrp+'][id='+grID+']').is(':checked');
		if (getAttr != true) {
			$(':radio[name='+grName+'][id='+grID+']').prop('checked', true);
		} else {
			$(':radio[name='+teGrp+'][id='+grID+']').prop('checked', false);			
			$(':radio[name='+grName+'][id='+grID+']').prop('checked', true);
		}
	});