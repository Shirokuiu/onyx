new WOW().init();

$(function () {
  $('.logo').on('mouseover', function () {
    $(this).addClass('animated').addClass('tada');
  });
  $('.logo').on('mouseleave', function () {
    $(this).removeClass('animated').removeClass('tada');
  });
  $('.portfolio__blocksWrap').delegate('.portfolio__cart-img', 'mouseover', function () {
    $(this).addClass('animated').addClass('pulse');
  });
  $('.portfolio__blocksWrap').delegate('.portfolio__cart-img', 'mouseleave', function () {
    $(this).removeClass('animated').removeClass('pulse');
  });
  
  $('#pageHeaderScroll').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  $(window).scroll(function(){
   var servicesLink = $('.services__link');
     if ( $(window).scrollTop() > 820 ){
        servicesLink.addClass('services__link--scroll');
     } else {
        servicesLink.removeClass('services__link--scroll');
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