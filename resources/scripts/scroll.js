/*  
JSLint complained loudly about the content of this file, but I don't yet
have the expertise to make the corrections.
*/
$(document).ready(function () {

	var scrolllink = $('a');

	// Smooth scrolling

	scrolllink.click(function (event) {
		event.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
	});
});