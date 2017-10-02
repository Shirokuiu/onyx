new WOW().init();

$(function () {
  $('.logo').on('mouseover', function () {
    $(this).addClass('animated').addClass('tada');
  });
  $('.logo').on('mouseleave', function () {
    $(this).removeClass('animated').removeClass('tada');
  });
  
  $('#pageHeaderScroll').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  $(window).scroll(function(){
   var servicesLink = $('.page-header__blockDescription-rowTop');
     if ( $(window).scrollTop() > 600 ){
        servicesLink.addClass('page-header__blockDescription-rowTop--fixed');
     } else {
        servicesLink.removeClass('page-header__blockDescription-rowTop--fixed');
     }
  });
  $(window).scroll(function(){
   var servicesSocialLinkFb = $('.services__socialLink--fb');
     if ( $(window).scrollTop() > 50 ){
        servicesSocialLinkFb.addClass('services__socialLink--fbScroll');
     } else {
        servicesSocialLinkFb.removeClass('services__socialLink--fbScroll');
     }
  });
  $(window).scroll(function(){
   var servicesSocialLinkInst = $('.services__socialLink--inst');
     if ( $(window).scrollTop() > 110 ){
        servicesSocialLinkInst.addClass('services__socialLink--instScroll');
     } else {
        servicesSocialLinkInst.removeClass('services__socialLink--instScroll');
     }
  });
  $(window).scroll(function(){
   var servicesSocialLinkIn = $('.services__socialLink--in');
     if ( $(window).scrollTop() > 170 ){
        servicesSocialLinkIn.addClass('services__socialLink--inScroll');
     } else {
        servicesSocialLinkIn.removeClass('services__socialLink--inScroll');
     }
  });
});