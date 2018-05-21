$(document).foundation();


$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  sessionStorage.setItem('set', 'set');
}
});

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


$(window).scroll(function(){
    var elementoffset = $('#newsletter').offset(); // <<< change #elementhere with your element you want the scroll to make action when reach it                         
    if ($(this).scrollTop() < elementoffset.top) {
        $('.navigation__wrapper').fadeIn(250);
        $('.footer').fadeIn(250);
        $('#empirical').fadeOut(500);
        $('#spirits').fadeOut(500);
    } else {
        $('.navigation__wrapper').fadeOut(250);
        $('.footer').fadeOut(250);
        $('#empirical').fadeIn(500);
        $('#spirits').fadeIn(500);
    }
 });