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
  var wayp = $('.features');
  var mainNavItemServises = $('.main-nav__item--services');
  var mainNavItemWorks = $('.main-nav__item--works');
  var mainNavItemContacts = $('.main-nav__item--contacts');
  var width = $(window).outerWidth();
  var height = $(window).outerHeight();
  var features = $('.features');
  
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
  var pageHeader = $('.page-header');
  var pageFooter = $('.page-footer');
  
  if (height <= 767) {
    features.addClass('features--paddingLaptop');
  } else {
    features.removeClass('features--paddingLaptop');
  }
  
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
  
  var nav = $('.page-header__blockDescription-rowTop');
  var contactsFormItem = $('.contacts-form__item');
  var pageFooterContactsLinks = $('.page-footer__contactsLinks');
  
   if (width <= 768) {
    contactsFormItem.focusin(function () {
      pageFooterContactsLinks.addClass('page-footer__contactsLinks--hidden');
    });
    contactsFormItem.focusout(function () {
      pageFooterContactsLinks.removeClass('page-footer__contactsLinks--hidden');
    });
  } 
  
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
      if (height < 768 && height >= 420 && i > footerPos) {
        pageHeaderButton.addClass('page-header__button--footer');
      }
      if (height < 420 && i > footerPos) {
        nav.removeClass('page-header__blockDescription-rowTop--rotate');
        nav.addClass('page-header__blockDescription-rowTop--hidden');
      }
    } else {
      nav.removeClass('footer-nav');
      nav.removeClass('page-header__blockDescription-rowTop--hidden');
      pageHeaderButton.removeClass('page-header__button--footer');
    }
  });
  
  $(document).scroll(function () {
    if ($(document).scrollTop() > $('header').height() -1) {
      nav.addClass('page-header__blockDescription-rowTop--fixed');
      if (height < 420 && $(document).scrollTop() > $('header').height() -1) {
        nav.addClass('page-header__blockDescription-rowTop--rotate');
      }
    } else {
      nav.removeClass('page-header__blockDescription-rowTop--fixed');
      nav.removeClass('page-header__blockDescription-rowTop--rotate');
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
  var featuresBlockDisabled = $('.features__block--disabled');
  
  $(window).resize(function () {
    var width = $(window).outerWidth();
    
    if (width < 768) {
      featuresBlockDisabled.remove();
      
      featuresWraperBlock.addClass('owl-carousel');
      featuresWraperBlock.owlCarousel({
        loop: true,
        smartSpeed: 1500,
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
    featuresBlockDisabled.remove();
    
    featuresWraperBlock.addClass('owl-carousel');
    featuresWraperBlock.owlCarousel({
        loop: true,
        smartSpeed: 1500,
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
  
  /*pageHeaderButton.on('click', function () {
    if (pageHeaderButton.hasClass('page-header__button--open')) {
      pageHeaderButton.removeClass('page-header__button--open');
      pageFooterContactsLinks.addClass('page-footer__contactsLinks--hidden');
      pageHeaderHeadline.removeClass('page-header__headline--hidden');
      pageHeaderText.removeClass('page-header__text--hidden');
      pageHeaderLink.removeClass('page-header__link--hidden');
      mainNav.removeClass('main-nav--open');
      social.removeClass('social--open');
      pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
      pageHeaderBlockDescriptionRowTop.removeClass('page-header__blockDescription-rowTop--caseOpen');
          
    } else {
      pageHeaderButton.addClass('page-header__button--open');
      pageFooterContactsLinks.removeClass('page-footer__contactsLinks--hidden');
      pageHeaderHeadline.addClass('page-header__headline--hidden');
      pageHeaderText.addClass('page-header__text--hidden');
      pageHeaderLink.addClass('page-header__link--hidden');
      mainNav.addClass('main-nav--open');
      social.addClass('social--open');
      pageHeaderBlockDescriptionRowTopWrap.addClass('page-header__blockDescription-rowTop-wrap--open');
      pageHeaderBlockDescriptionRowTop.addClass('page-header__blockDescription-rowTop--caseOpen');
      
    }
  });*/
  
  /*pageHeader.delegate('.page-header__button--footer', 'click', function () {
    contactsForm.toggleClass('contacts-form--hidden');
  });*/

  mainNavItem.on('click', function () {
    pageHeaderButton.removeClass('page-header__button--open');
    pageHeaderHeadline.removeClass('page-header__headline--hidden');
    pageHeaderText.removeClass('page-header__text--hidden');
    pageHeaderLink.removeClass('page-header__link--hidden');
    mainNav.removeClass('main-nav--open');
    social.removeClass('social--open');
    pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
    
    pageFooterContactsLinks.toggleClass('page-footer__contactsLinks--hidden');
    pageHeaderBlockDescriptionRowTop.toggleClass('page-header__blockDescription-rowTop--caseOpen');
  });
  
  portfolioButton.on('click', function () {
    $(this).addClass('portfolio__button--hidden');
    portfolioCart.removeClass('portfolio__cart--mobileHidden');
  });
  
  $(window).resize(function () {
    height = $(window).outerHeight();
    
    if(height < 420) {
      pageHeader.addClass('page-header--rotate');
      pageFooter.addClass('page-footer--rotate');
    } else {
      pageHeader.removeClass('page-header--rotate');
      pageFooter.removeClass('page-footer--rotate');
    }
  });
  
  if (height < 420) {
    pageHeader.addClass('page-header--rotate');
    pageFooter.addClass('page-footer--rotate');
  } else {
    pageHeader.removeClass('page-header--rotate');
    pageFooter.removeClass('page-footer--rotate');
  }
  
});