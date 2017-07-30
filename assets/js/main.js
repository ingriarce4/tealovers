


$( document ).ready(function() {

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

});

$( document ).ready(function() {
    alert( video.toSource() ); //For testing
    video.id = 'video';
    video.source.src = 'https://vimeo.com/148993635';
    video.type = 'video/mp4';
    video.control = true;
video.appendTo($('#video1'));
});