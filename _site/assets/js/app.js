$(document).foundation();

// 1. Loading
// --------------------

$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500);  
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
});

$(function() {
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

// 5. Rellax
// -------------

/*
$(function() {
var rellax = new Rellax('.rellax');
});
*/

/*
$(function() {
  $.scrollify({
    section : ".example-classname",
  });
});
*/


/*
$(document).ready(function() {
	$('#fullpage').fullpage();
	verticalCentered: false
});
*/

$('#fullpage').fullpage({
  scrollOverflow: true,
  verticalCentered: false,
  navigation: true,
	menu: '#menu',
	scrollingSpeed: 1000,
	scrollBar:true
});