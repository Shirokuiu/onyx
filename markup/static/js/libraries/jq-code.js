wow = new WOW(
  {
  boxClass:     'wow',      
  animateClass: 'animated', 
  offset:       0,          
  mobile:       false,      
  live:         true        
  }
)
wow.init();

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
  var width = $(window).outerWidth();
  
  $(window).scroll(function () {
    var i = 0;
    var footerPos = $('footer').offset().top;
    
    if (width < 768) {
      i = $(this).scrollTop() + 9;
    } else {
      i = $(this).scrollTop() + 1;
    }

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
  var featuresWraperBlock = $('.features__wraperBlock');
  
  $(window).resize(function () {
    var width = $(window).outerWidth();
    
    if (width < 768) {
      featuresWraperBlock.addClass('owl-carousel');
      featuresWraperBlock.owlCarousel({
        loop:true,
        margin:20,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        dotsEach: true,
        responsive:{
            0:{
                items:1.25
            },
            767:{
                items:1.25
            }
        }
      });
    } else {
      featuresWraperBlock.removeClass('owl-carousel');
      featuresWraperBlock.owlCarousel('destroy');
    }
  });
  
  if (width < 768) {
    featuresWraperBlock.addClass('owl-carousel');
    featuresWraperBlock.owlCarousel({
        loop:true,
        margin:20,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        dotsEach: true,
        responsive:{
            0:{
                items:1.25
            },
            767:{
                items:1.25
            }
        }
      });
  } else {
    featuresWraperBlock.removeClass('owl-carousel');
    featuresWraperBlock.owlCarousel('destroy');
  }
  
  var pageHeaderButton = $('.page-header__button');
  var pageHeaderHeadline = $('.page-header__headline');
  var pageHeaderText = $('.page-header__text');
  var pageHeaderLink = $('.page-header__link');
  var mainNav = $('.main-nav');
  var social = $('.social');
  var pageHeaderBlockDescriptionRowTopWrap = $('.page-header__blockDescription-rowTop-wrap');
  var mainNavItem = $('.main-nav__item');
  var footerNav = $('.page-header__blockDescription-rowTop .page-header__button');
  var contactsForm = $('.contacts-form');
  var pageFooterContactsLinks = $('.page-footer__contactsLinks');
  var pageHeaderBlockDescriptionRowTop = $('.page-header__blockDescription-rowTop');
  var portfolioButton = $('.portfolio__button');
  
  pageHeaderButton.on('click', function () {
    $(this).toggleClass('page-header__button--open');
    pageHeaderHeadline.toggleClass('page-header__headline--hidden');
    pageHeaderText.toggleClass('page-header__text--hidden');
    pageHeaderLink.toggleClass('page-header__link--hidden');
    mainNav.toggleClass('main-nav--open');
    social.toggleClass('social--open');
    pageHeaderBlockDescriptionRowTopWrap.toggleClass('page-header__blockDescription-rowTop-wrap--open');
    contactsForm.toggleClass('contacts-form--hidden');
    pageFooterContactsLinks.toggleClass('page-footer__contactsLinks--hidden');
    pageHeaderBlockDescriptionRowTop.toggleClass('page-header__blockDescription-rowTop--caseOpen');
  });

  mainNavItem.on('click', function () {
    pageHeaderButton.removeClass('page-header__button--open');
    pageHeaderHeadline.removeClass('page-header__headline--hidden');
    pageHeaderText.removeClass('page-header__text--hidden');
    pageHeaderLink.removeClass('page-header__link--hidden');
    mainNav.removeClass('main-nav--open');
    social.removeClass('social--open');
    pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
  });
  
  portfolioButton.on('click', function () {
    $(this).addClass('portfolio__button--hidden');
    portfolioCart.removeClass('portfolio__cart--mobileHidden');
  });
  
});