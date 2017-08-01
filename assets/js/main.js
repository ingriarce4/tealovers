
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

$('.gallery-item').hover(function(){
            $(this).find('h5, p').stop().animate({
                opacity: '1',              
                marginLeft: '230px'
            }, 300);
        }, function(){
            $(this).find('h5, p').stop().animate({
                opacity: '0',              
                marginLeft: '0px'
            }, 100);
        });

  	/* AUTHOR LINK */
     $('.about-me-img img, .authorWindowWrapper').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
        });
  