$(document).ready(function() {
    $('.mbmenu-icon-w').click(function () {
		$('#menu-content').animate({'left' : '0'}, 500);
		$('#sitebodyoverlay').show();
    });
    $('#sitebodyoverlay').click(function () {
		$('#menu-content').animate({'left' : '-100%'}, 500);
		$('#sitebodyoverlay').hide();
    });
	$('#close-mb-menu').click(function () {
		$('#menu-content').animate({'left' : '-100%'}, 500);
		$('#sitebodyoverlay').hide();
    });
	$(window).scroll(function(){
		if ( $(window).scrollTop() >= 150 ){ 
		if(!$('.main-header').hasClass('menu-fixed')){
			$('.main-header').addClass('menu-fixed');
		}
		}
		else {
		if($('.main-header').hasClass('menu-fixed')){
			$('.main-header').removeClass('menu-fixed');
		}
		}
	});

});