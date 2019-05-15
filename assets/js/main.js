jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Sticky Header
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var h = $("#header").height();
        if (y > h) {
            $("#header").addClass("is-sticky");
        } else {
            $("#header").removeClass("is-sticky");
        }
    });
    // Change icon navbar-toggler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('is-active');
    });
    // Banner Carousel
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Process Carousel
    $('.process-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Related Post
    $('.related-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Project Post
    $('.pj-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Ex
    $('.ex-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: false,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        }
      ]
    });
    // Slider product
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        dots: false,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    // Show search popup
    $('.navbar-nav > .search-icon > .nav-link').attr('href','javascript:void(0)');
    $('.navbar-nav > .search-icon > .nav-link').click(function(){
        $('.search-popup').addClass('be-shown');
    });
    $('.search-close').click(function(){
        $('.search-popup').removeClass('be-shown');
    });
    // Customize .about-block
    $('.about-block:nth-child(2n+2) .about-col-1').addClass('order-1 order-lg-2');
    $('.about-block:nth-child(2n+2) .about-col-2').addClass('order-2 order-lg-1');
});
$(document).mouseup(function(e) {
    if (!$(".search-popup").is(e.target) && $(".search-popup").has(e.target).length === 0) {
        $(".search-popup").removeClass("be-shown");
    }
});