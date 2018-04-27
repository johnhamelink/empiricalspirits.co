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
// ----------------

$("a.link").hover(function() {
	$this = $(this);
  $(".home__products").css("background-image", "url(" + $(this).data("bg") + ")");
	}, function() {
	$(".home__products").css("background-image", '');
});

/*
$(function() {
var rellax = new Rellax('.rellax');
});
*/
