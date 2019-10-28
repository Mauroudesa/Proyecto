window.onload = function(){

var menuBtn = $('.menu-icon'),
menu = $('.navegacion ul');

menuBtn.click(function()  {
  if ( menu.hasClass('visible') ) {
    menu.removeClass('visible');

  } else{
    menu.addClass('visible');
  }

});
























}
