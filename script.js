

$(window).on('scroll', function() {
	var skillsDiv = $('#skills');
	var winT = $(window).scrollTop();
	var winH = $(window).height();
	var skillsT = skillsDiv.offset().top;
	if (winT + winH > skillsT) {
		$('.skillbar').each(function() {
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			}, 6000);
		});
	}
});