"use strict";
$(function(){
    $('.js-news-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 1000,
        cssEase: 'linear',
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerMode: false
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.js-license-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        cssEase: 'linear',
        autoplay: false,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" data-role="none" class="slider-prev slider-arrow" aria-label="Previous" role="button" ></button>',
        nextArrow: '<button type="button" data-role="none" class="slider-next slider-arrow" aria-label="Next" role="button" ></button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
        ]
    });
    $('.js-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" data-role="none" class="slider-prev slider-arrow" aria-label="Previous" role="button" ></button>',
        nextArrow: '<button type="button" data-role="none" class="slider-next slider-arrow" aria-label="Next" role="button" ></button>',
        asNavFor: '.js-slider-nav'
    }).on('afterChange', function (event, slick, currentSlide) {
        var title = $(slick.$slides[currentSlide]).data('title');
        $('.slider__title').text(title);
    });
    $('.js-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-slider-for',
        vertical: true,
        focusOnSelect: true,
    });
    $('.label__info').each(function(){
        let w = $(this).width();
        if (w <= 300){
            $(this).css('left', '-95%');
            $(this).width(330);
        }
    });
    $(".js-sticky").stick_in_parent();
    //formstyler
    $('input[type="checkbox"], input[type="file"], select').styler();
    //anchor в карточке товара
    $('.js-btn-anchor').click(function(e){
        e.preventDefault();
        let href = $(this).attr('href');
        let blockToTop = $(href).offset().top - 30;
        $('html, body').animate({
            scrollTop: blockToTop
        }, 1500);
    });
    //mobile menu
    var isOpenMenu = false;
    $('.js-open-menu').click(function (e) {
        $('.nav-top').slideToggle();
        if (isOpenMenu == false) {
            $('body').css('overflow', 'hidden');
            $(this).addClass('open');
            isOpenMenu = true;
        }
        else{
            $('body').css('overflow-y', 'auto');
            $(this).removeClass('open');
            isOpenMenu = false;
        }
    });
    //mobile configurator
    var isOpenConfig = false;
    $('.js-open-constructor').click(function (e) {
        $('.constructor__block').slideToggle(1000);
        if (isOpenConfig == false) {
            $(this).css('background-color', '#c7041f');
            $(this).text('Закрыть конфигуратор');
            isOpenConfig = true;
        } else {
            $(this).css('background-color', '#00a154');
            $(this).text('Открыть конфигуратор');
            isOpenConfig = false;
        }
    });
    //configurator
    var isCheckModif = 0,
        isCheckMotor = 0,
        isCheckType = 0;
    $('.js-modif').click(function(){
        isCheckModif = 1;
        let $this = $(this);
        conf($this, ".js-modif-result");
    })
    $('.js-motor').click(function(){
        isCheckMotor = 1;
        let $this = $(this);
        conf($this, ".js-motor-result");
    });
    $('.js-type').click(function(){
        isCheckType = 1;
        let $this = $(this);
        conf($this, ".js-type-result");
    });
    function conf($this, res) {
        $this.addClass('check').siblings().removeClass('check');
        let title = $this.find('.box__title').text();
        let text = $this.find('.box__text').text();
        $(res).text(title + ": " + text);
        if ((isCheckModif + isCheckMotor + isCheckType) === 3) {
            $('.js-open-modal').removeClass('disabled');
            $('.js-price').text("000");
            $('.js-price-total').fadeIn();
            $('.js-complete').fadeIn();
        }
    }
    $('.js-open-modal').click(function () {
        if(!$(this).hasClass('disabled')){
            let modal = $(this).data("modal");
            $('.modal').css('display', 'flex');
            $('#' + modal).fadeIn();
        }
    });
    $('.modal__close').click(function () {
        $('.modal').css('display', 'none');
        $('.modal__form').css('display', 'none');
    });
    $('.modal').mouseup(function (e) {
        var container = $(".modal__form");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.modal').css('display', 'none');
            $('.modal__form').css('display', 'none');
        }
    });
    $(".lang__item").click(function () {
        $(this).removeClass('open').siblings().addClass('open');
    });
    $("input[name=phone]").mask("+7(999)-99-9999");
    responsiveBreadcrumb();
});
$(window).on('resize', function(){
    responsiveBreadcrumb();
});
//breadcrumb
function responsiveBreadcrumb() {
    var marginLeft = parseFloat($('.content__inner, .articles__inner, .news-page__inner, .cart__inner').css('margin-left'));
    if (marginLeft > 20){
        $('.breadcrumb__inner').css('margin-left', marginLeft)
    }
}
if (document.querySelectorAll('#map').length) {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
            center: [56.649058, 43.392293],
            zoom: 13,
            controls: []
        });

        var placemark = new ymaps.Placemark(myMap.getCenter(), {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<img src="../img/content_logo.png" height="80">' ,
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<p class="map-title" >Офис:</p>' +
                'Нижегородская обл., <br/>г.Заволжье, ул.Индустриальная, 13 <br/>' +
                '<a style="padding-top: 7px" href="tel:88005501151">8(800) 550 - 11 - 51</a>(звонок бесплатный)<br/>' +
                '<a href="tel:88314241151">8(831) 424 - 11 - 51</a><br/>' +
                '<a style="padding-top: 7px" href="maito:zvm1@zvm-nn.ru">zvm1@zvm-nn.ru</a><br/>',
            // Зададим содержимое нижней части балуна.
            // Зададим содержимое всплывающей подсказки.
            hintContent: 'Завод вездеходных машин'
        });
        // Добавим метку на карту.
        myMap.geoObjects.add(placemark);
        // Откроем балун на метке.
        placemark.balloon.open();
    }
}



