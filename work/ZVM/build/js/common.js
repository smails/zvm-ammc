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
        variableWidth: true
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
    
});




