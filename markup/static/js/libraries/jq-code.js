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
  var mainNavItem = $('.main-nav__item--track');
  var mainNavItemFooter = $('.main-nav__item--trackFooter');
  var footerNav = $('.page-header__blockDescription-rowTop .page-header__button');
  var contactsForm = $('.contacts-form');
  var pageFooterContactsLinks = $('.page-footer__contactsLinks');
  var pageHeaderBlockDescriptionRowTop = $('.page-header__blockDescription-rowTop');
  var portfolioButton = $('.portfolio__button');
  var pageHeader = $('.page-header');
  var pageFooter = $('.page-footer');
  
  var navLiFooter = $('.main-nav__item--trackFooter');
  var navLiServices = $('.main-nav__item--trackServices');
  var navLiPortfolio = $('.main-nav__item--portfolio');
  
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
  
  /*$('#contacts').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 10);
  });*/
  
  $('.page-header__link').on('click', function (event) {
    event.preventDefault();
    
    var id = $(this).attr('href'),             
        top = $(id).offset().top;
    
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  var nav = $('.page-header__blockDescription-rowTop');
  var contactsFormItem = $('.contacts-form__item');
  
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
    var servicesPos = $('.features-jsNav').offset().top;
    var portfolioPos = $('.portfolio-jsNav').offset().top - 40;
    
    if (width < 768) {
      i = $(this).scrollTop() + 9;
    } else {
      i = $(this).scrollTop() + 1;
    }
    
    if (i > servicesPos && i < portfolioPos) {
      navLiServices.addClass('mPS2id-highlight');
    } else {
      navLiServices.removeClass('mPS2id-highlight');
    }
    
    if (i > portfolioPos && i < footerPos) {
      navLiPortfolio.addClass('mPS2id-highlight');
    } else {
      navLiPortfolio.removeClass('mPS2id-highlight');
    }

    if (i > footerPos) {
      nav.addClass('footer-nav');
      navLiFooter.addClass('mPS2id-highlight');
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
      navLiFooter.removeClass('mPS2id-highlight');
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
  var featuresBlockDisabled = $('.features__block--disabled');
  var smmReviewsSlider = $('.smm__reviews-slider');
  var smmQuestionSlider = $('.smm__question-slider');
  
  smmQuestionSlider.slick({
    nextArrow: '<button type="button" class="slick-next">ДРУГОЙ ВОПРОС</button>'
  });
  
  var seoPriceBlockMobileButton = $('.seo__price-block-headlineWrap');
  var seoPriceBlockList = $('.seo__price-block-list');
  
  
  
  $(window).resize(function () {
    var width = $(window).outerWidth();
    
    if (width <= 768) {
      featuresBlockDisabled.remove();
      
      navLiPortfolio.on('click', function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),             
            top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 10);
      });
      
      seoPriceBlockMobileButton.on('click', function () {
        $(this).parent().find('.seo__price-block-list').toggleClass('seo__price-block-list--mobileVisible');
      });
    } else {
      navLiPortfolio.on('click', function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),             
            top = $(id).offset().top - 20;

        $('body, html').animate({scrollTop: top}, 50);
      });
      
      seoPriceBlockMobileButton.unbind('click');
    }
  });
  
  if (width <= 768) {
    featuresBlockDisabled.remove();
    
    navLiPortfolio.on('click', function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),             
            top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 50);
      });
    
    seoPriceBlockMobileButton.on('click', function () {
      $(this).parent().find('.seo__price-block-list').toggleClass('seo__price-block-list--mobileVisible');
    });
  } else {
    navLiPortfolio.on('click', function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),             
            top = $(id).offset().top - 40;

        $('body, html').animate({scrollTop: top}, 50);
      });
    
    seoPriceBlockMobileButton.unbind('click');
  }
  
  pageHeaderButton.on('click', function () {
    if (pageHeaderButton.hasClass('page-header__button--open')) {
      pageHeaderButton.removeClass('page-header__button--open');
      pageFooterContactsLinks.removeClass('page-footer__contactsLinks--hidden');
      contactsForm.removeClass('contacts-form--hidden');
      pageHeaderHeadline.removeClass('page-header__headline--hidden');
      pageHeaderText.removeClass('page-header__text--hidden');
      pageHeaderLink.removeClass('page-header__link--hidden');
      mainNav.removeClass('main-nav--open');
      social.removeClass('social--open');
      pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
      pageHeaderBlockDescriptionRowTop.removeClass('page-header__blockDescription-rowTop--caseOpen');
          
    } else {
      pageHeaderButton.addClass('page-header__button--open');
      pageFooterContactsLinks.addClass('page-footer__contactsLinks--hidden');
      contactsForm.addClass('contacts-form--hidden');
      pageHeaderHeadline.addClass('page-header__headline--hidden');
      pageHeaderText.addClass('page-header__text--hidden');
      pageHeaderLink.addClass('page-header__link--hidden');
      mainNav.addClass('main-nav--open');
      social.addClass('social--open');
      pageHeaderBlockDescriptionRowTopWrap.addClass('page-header__blockDescription-rowTop-wrap--open');
      pageHeaderBlockDescriptionRowTop.addClass('page-header__blockDescription-rowTop--caseOpen');
      
    }
  });

  mainNavItem.on('click', function () {
    pageHeaderButton.removeClass('page-header__button--open');
    pageHeaderHeadline.removeClass('page-header__headline--hidden');
    pageHeaderText.removeClass('page-header__text--hidden');
    pageHeaderLink.removeClass('page-header__link--hidden');
    mainNav.removeClass('main-nav--open');
    social.removeClass('social--open');
    pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
    pageHeaderBlockDescriptionRowTop.removeClass('page-header__blockDescription-rowTop--caseOpen');
  });
  
  mainNavItemFooter.on('click', function () {
    pageHeaderButton.removeClass('page-header__button--open');
    pageHeaderHeadline.removeClass('page-header__headline--hidden');
    pageHeaderText.removeClass('page-header__text--hidden');
    pageHeaderLink.removeClass('page-header__link--hidden');
    mainNav.removeClass('main-nav--open');
    social.removeClass('social--open');
    pageHeaderBlockDescriptionRowTopWrap.removeClass('page-header__blockDescription-rowTop-wrap--open');
    contactsForm.removeClass('contacts-form--hidden');
    pageFooterContactsLinks.removeClass('page-footer__contactsLinks--hidden');
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
  
  var smmPriceCartBlockMoreText = $('.smm__price-cart-blockMore');
  
  smmPriceCartBlockMoreText.on('click', function () {
    $(this).toggleClass('smm__price-cart-blockMore--clicked');
    $(this).parent().parent().toggleClass('smm__price-cart--mobileOpen');
    
    if ($(this).hasClass('smm__price-cart-blockMore--clicked')) {
      $(this).html('<p class="smm__price-cart-blockMore-text">Свернуть</p>')
      $(this).find('.smm__price-cart-blockMore-text').addClass('smm__price-cart-blockMore-text--active');
    } else {
      $(this).html('<p class="smm__price-cart-blockMore-text">Подробнее</p>')
      $(this).find('.smm__price-cart-blockMore-text').removeClass('smm__price-cart-blockMore-text--active');
    }
    
    $(this).parent().parent().find('.smm__price-cart-blockMore-accordionWrap').toggleClass('smm__price-cart-blockMore-accordionWrap--visible');
  });
  
  var featuresBlockSmm = $('.features__block--smm');
  
  featuresBlockSmm.on('click', function () {
    location.href = 'case-smm.html';
  });
  
  var featuresBlockSeo = $('.features__block--seo');
  
  featuresBlockSeo.on('click', function () {
    location.href = 'case-seo.html';
  });
  
  var featuresBlockMarketing = $('.features__block--marketing');
  
  featuresBlockMarketing.on('click', function () {
    location.href = 'case-marketing.html';
  });
  
  var featuresBlockWebDesign = $('.features__block--webDesign');
  
  featuresBlockWebDesign.on('click', function () {
    location.href = 'case-webDesign.html';
  });
  
  var featuresBlockBrending = $('.features__block--brending');
  
  featuresBlockBrending.on('click', function () {
    location.href = 'case-brending.html';
  });
	
	var featuresBlockIllustration = $('.features__block--illustration');
	
	featuresBlockIllustration.on('click', function () {
		location.href = 'case-illustration-cart.html'
	});
});