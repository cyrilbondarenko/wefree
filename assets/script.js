$(document).ready(function(){
  $('.popup').hide();
  $('header nav .burger').click(function(){
    $('.burger-menu').css('display', 'flex');
  });
  $('.burger-menu .close').click(function(){
    $('.burger-menu').css('display', 'none');
  });
  $('.burger-menu ul a').click(function(){
    $('.burger-menu').css('display', 'none');
  });
  $('.problem').click(function(){
    if ($(this).find('.hide').is(':hidden')) {
      $(this).find('.hide').show();
      $(this).find('.show > img').css('transform', 'rotate(180deg)');
    } else {
      $(this).find('.hide').hide();
      $(this).find('.show > img').css('transform', 'rotate(0deg)');
    }
  });
  $('.subscribe').click(function(){
    $('.popup').fadeIn();
  });
  $('.popup .cross').click(function(){
    $('.popup').fadeOut();
  });
});
