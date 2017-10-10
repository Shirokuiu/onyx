new WOW().init();

$(function () {
  $('.logo').on('mouseover', function () {
    $(this).addClass('animated').addClass('pulse');
  });
  $('.logo').on('mouseleave', function () {
    $(this).removeClass('animated').removeClass('pulse');
  });
  
  $('#pageHeaderScroll').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  $('.page-header__link').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  
  $('.main-nav__item').mPageScroll2id({
    scrollSpeed: 20,
    offset: 100
  });
  
  var nav = $('.page-header__blockDescription-rowTop');
  
  $(window).scroll(function () {
    var i = 0;
    var footerPos = $('footer').offset().top;
    i = $(this).scrollTop() + 1;
    
    if (i > footerPos) {
      nav.addClass('footer-nav');
    } else {
      nav.removeClass('footer-nav');
    }
  });
  
  $(document).scroll(function () {
    if ($(document).scrollTop() > $('header').height() -1) {
      nav.addClass('page-header__blockDescription-rowTop--fixed');
    } else {
      nav.removeClass('page-header__blockDescription-rowTop--fixed');
    }
  });
  
  var portfolioCart = $('.portfolio__cart');
  
  portfolioCart.on('mouseover', function () {
    $(this).addClass('portfolio__cart--hover');
  });
  portfolioCart.on('mouseleave', function () {
    $(this).removeClass('portfolio__cart--hover');
  });
  
  var portfolioCart = $('.portfolio__cart');
  
  var width = $(window).outerWidth();
    
    if (width < 1308) {
      portfolioCart.removeClass('wow, fadeInLeft').addClass('wow, fadeInUp');
    } else {
      portfolioCart.removeClass('fadeInUp');
    }
  
});