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
//   sessionStorage.setItem('set', 'set');
}
});