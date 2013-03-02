	$("td#tdR").click(function () {
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
		if (getAttr) {
			othRD.prop('checked', false);
		}
		curRD.prop('checked', true);
	});