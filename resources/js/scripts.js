$(document).ready(function () {

    // for the sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {offset: '25%'})


    // scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })


    // Animations on scroll
    $('.js--wp-1').waypoint(function () {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn')
        },
        {
            offset: '50%'
        })
    $('.js--wp-2').waypoint(function () {
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
        },
        {
            offset: '50%'
        })
    $('.js--wp-3').waypoint(function () {
            $('.js--wp-3').addClass('animate__animated animate__fadeInUp')
        },
        {
            offset: '50%'
        })
    $('.js--wp-4').waypoint(function () {
            $('.js--wp-4').addClass('animate__animated animate__pulse')
        },
        {
            offset: '50%'
        })

    // mobile nav
    $('.js--nav-icon').click(function () {
        let nav = $('.js--main-nav');
        let open = $('.open')
        let close = $('.close')
        nav.slideToggle(200)

        if (open.hasClass('hidden')) {
            open.removeClass('hidden')
            close.addClass('hidden')
        } else {
            close.removeClass('hidden')
            open.addClass('hidden')
        }
    })
});