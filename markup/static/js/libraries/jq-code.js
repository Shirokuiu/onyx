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
  
  
  $('.main-nav__item').mPageScroll2id({
    scrollSpeed: 20
  });
  
  var nav = $('.page-header__blockDescription-rowTop');
  
  $(document).scroll(function () {
    if ($(document).scrollTop() > $('header').height()) {
      nav.addClass('page-header__blockDescription-rowTop--fixed');
    } else {
      nav.removeClass('page-header__blockDescription-rowTop--fixed');
    }
    
    if ($(document).scrollTop() > $('main').height()) {
      nav.addClass('footer-nav');
    } else {
      nav.removeClass('footer-nav');
    }
  });
  
  /*var target = $('.page-footer');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      nav.addClass('footer-nav');
    } else {
      nav.removeClass('footer-nav');
    }
  });*/
  
  
  /*$(window).scroll(function(){
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
  });*/
});