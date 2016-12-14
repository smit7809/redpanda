$(document).scroll(function() {
	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y > 760) {
		$("#button").fadeIn();

	}

	else {
	$("#button").fadeOut();
	}

	

});