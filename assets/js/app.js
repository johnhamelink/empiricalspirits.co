$(document).foundation();

// 1. Loading
// --------------------

$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
/*
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500); 
*/ 
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

$(".cocktail-link").hover(function() {
	$this = $(this);
  $(".cocktails__inner").css("background-image", "url(" + $(this).data("bg") + ")");
	}, function() {
	$(".cocktails__inner").css("background-image", '');
});

// 5. Rellax
// ---------

/*
$(function() {
var rellax = new Rellax('.rellax');
});
*/

// 5. Full Page
// ------------

$('#fullpage').fullpage({
  scrollOverflow: true,
  verticalCentered: false,
  navigation: true,
	menu: '#menu',
	afterRender: function(){
           $('#empirical').hide();
           $('#spirits').hide();
      },
      afterLoad: function(anchor, index){
          if(index == 7){
               $('#menu').fadeOut();
               $('#footer').fadeOut();
               $('#empirical').fadeIn();
               $('#spirits').fadeIn(); 
          } else{
               $('#menu').fadeIn();
               $('#footer').fadeIn();
               $('#empirical').fadeOut();
               $('#spirits').fadeOut(); 
          }
      },
	scrollingSpeed: 1000,
	scrollBar:true,
	loopBottom: true,
	scrollOverflowReset: true,
	responsiveWidth: 640,
	lazyLoading: true
});