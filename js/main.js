/* HOMEPAGE */

var isActive = true;

window.addEventListener("mousewheel", function(e) {
    wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    if (isActive == true) {
        if (wDelta == 'down') {
            scrollRight()
            servicesDown()
        } else {
            scrollLeft()
            servicesUp()
        }
    } else {
        return false;
    }
}, { passive: false });

function scrollRight() {
    $('.homepage__wrapper').attr('style', 'transform:translateX(-100vw)')
}

function scrollLeft() {
    $('.homepage__wrapper').attr('style', 'transform:translateX(0vw)')
}

/* HOMEPAGE END */

/* SERVICES */

$('.services__card').click(function() {
    var clickedCard = $(this).attr('id')

    /* SMALL LOGO SWITCHER */

    $('.card__logotype').removeClass('card__logo_show');
    $(this).find('.card__logotype').addClass('card__logo_show')

    /* INFO BLOCK */
    $('.services__info_title').text($(this).find('.services__block_title').text())
    $('.services__info_subtitle').text($(this).find('.services__block_subtitle').text())
    $('.services__info_desc').text($(this).find('.services__block_desc').text())
})

$('.values__logo_bottom').click(function() {
    $('.values__logo_top').removeClass('logo__active')
    $(this).addClass('logo__active')

    $('.values_top_items').removeClass('value__top_active')
    $('.values_bottom_items').addClass('value__bottom_active')
})

$('.values__logo_top').click(function() {
    $('.values__logo_bottom').removeClass('logo__active')
    $(this).addClass('logo__active')

    $('.values_bottom_items').removeClass('value__bottom_active')
    $('.values_top_items').addClass('value__top_active')
})

/* PAGE TRANSFORM */

var currentSlide = 0;
var isScrollActive = false;

function servicesDown() {
    currentSlide = currentSlide + 1;
    if (currentSlide < 0) {
        currentSlide = 0;
        return false;
    } else if (currentSlide > 3) {
        currentSlide = 3;
        return false;
    } else {
        var currentTranslate = Number($('.services__slider_wrapper').attr('style').replace('transform: translateY(', '').replace('vh);', ''));
        var finalTranslate = currentTranslate - 100;
        $('.services__slider_wrapper').attr('style', 'transform: translateY(' + finalTranslate + 'vh);')
    }

    $('.menu__nav_container').attr('style', 'transform: translateY(100%);');

    console.log(currentSlide)

    if (currentSlide == 1) {
        $('.scrollbar').attr('style', 'transform: translateY(100%)');
        $('.scrollbar__page').text('À propos')
    } else if (currentSlide == 2) {
        $('.scrollbar').attr('style', 'transform: translateY(200%)');
        $('.scrollbar__page').text('Valeurs Clés')
    } else if (currentSlide == 3) {
        $('.scrollbar').attr('style', 'transform: translateY(300%)');
        $('.scrollbar__page').text('CONTACT')
    } else if (currentSlide == 4) {
        $('.scrollbar').attr('style', 'transform: translateY(400%)');
        $('.scrollbar__page').text('CONTACT')
        currentSlide = 0;
    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 1000);
}



function servicesUp() {
    currentSlide = currentSlide - 1;

    console.log(currentSlide)

    if (currentSlide < 0) {
        currentSlide = 0;
        return false;
    } else if (currentSlide == 3) {
        currentSlide = 3;
        return false;
    } else {
        var currentTranslate = Number($('.services__slider_wrapper').attr('style').replace('transform: translateY(', '').replace('vh);', ''));
        var finalTranslate = currentTranslate + 100;
        $('.services__slider_wrapper').attr('style', 'transform: translateY(' + finalTranslate + 'vh);')
    }

    if (currentSlide == 0) {
        $('.scrollbar').attr('style', 'transform: translateY(0%)');
        $('.scrollbar__page').text('SERVICES')
        return false;
    } else if (currentSlide == 1) {
        $('.scrollbar').attr('style', 'transform: translateY(100%)');
        $('.scrollbar__page').text('À propos')
    } else if (currentSlide == 2) {
        $('.scrollbar').attr('style', 'transform: translateY(200%)');
        $('.scrollbar__page').text('Valeurs Clés')
    } else if (currentSlide == 3) {
        $('.scrollbar').attr('style', 'transform: translateY(300%)');
        $('.scrollbar__page').text('Contact')
    } else if (currentSlide == -1) {
        $('.scrollbar').attr('style', 'transform: translateY(300%)');
        $('.scrollbar__page').text('My Contacts')

        currentSlide = 3;
    }

    isActive = false;
    setTimeout(() => {
        isActive = true;
    }, 1000);
}