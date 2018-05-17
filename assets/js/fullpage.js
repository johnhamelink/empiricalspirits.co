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
          if(index === 7){
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