$(document).ready(function() {
	$('.down').click(function() {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
});

