$(function() {
	var sticky_nav_offset_top = $('#sticky_nav').offset().top;
	var sticky_nav = function(){
		var scroll_top = $(window).scrollTop();
		if (scroll_top > sticky_nav_offset_top) { 
			$('#sticky_nav').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#sticky_nav').css({ 'position': 'relative' }); 
		}   
	};
	sticky_nav();
	$(window).scroll(function() {
		 sticky_nav();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});
});
