$(document).foundation();

// 1. Loading
// --------------------

/*
$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  sessionStorage.setItem('set', 'set');
}
});
*/

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   

	
	 window.addEventListener('load', AOS.refresh);
});

// 4. Background
// -------------

$("a.link").hover(function() {
	$this = $(this);
  $(".home__products__inner").css("background-image", "url(" + $(this).data("bg") + ")");
	}, function() {
	$(".home__products__inner").css("background-image", '');
});

$(".cocktail-link").hover(function() {
	$this = $(this);
  $(".cocktails__inner").css("background-image", "url(" + $(this).data("bg") + ")");
	}, function() {
	$(".cocktails__inner").css("background-image", '');
});