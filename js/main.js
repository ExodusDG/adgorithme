/* VAULT */

var videoArray = []
$('.vault__video_block .vault__video').each(function(index) {
    var iframe = $(this).find('iframe')
    $(this).attr('index', 'video_' + index)
    $('#video_' + index).append(iframe)

});

$('.vault__video').each(function(index) {
    videoArray.push($(this))
});

$('#search').keyup(function() {
    var videoName = $(this).val().toLowerCase();
    updateVideo(videoName)
});

function updateVideo(videoName) {
    var videosArrayFiltered = [];
    $.each(videoArray, function(key, value) {
        var videoTitle = value[0].attributes[1].nodeValue.toLowerCase();
        if (videoTitle.indexOf(videoName) != -1) {
            videosArrayFiltered.push(this)
            $(this).removeClass('vault__video_hidden')
        } else {
            $(this).addClass('vault__video_hidden')
        }
    })
}


/* VALUT END */

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
    if ($('.services__slider').attr('page-name') == 'Services') {
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
}



function servicesUp() {
    if ($('.services__slider').attr('page-name') == 'Services') {
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
}

/* PARTNERS SLIDER */

var slideCount = $('.partners__slider_item').length;
var currentSlide = 0;

let i = 0;
while (i < slideCount / 3) {
    var idNumber = i + 1;
    $('.partners__dots').append("<div class='partners_dot' id='dot" + idNumber + "'><div></div></div>")
    i++;
}

$('#dot1 > div').addClass('dot__active')

function updateDots(currentSlide) {
    var dotNumber = currentSlide + 1
    $('.partners_dot div').removeClass('dot__active')
    $('#dot' + dotNumber + ' > div').addClass('dot__active');
    console.log('#dot' + dotNumber + '> div')
}

function sliderNext() {
    if (currentSlide > ((slideCount - 3) / 3)) {
        return false;
    } else {
        currentSlide++;
        updateDots(currentSlide)
        var translateWidth = currentSlide * 100;
        $('.partners__slider_wrapper').attr('style', 'transform: translateX(-' + translateWidth + '%)')
    }
}

function sliderPrev() {
    if (currentSlide == 0) {
        return false;
    } else {
        currentSlide--;
        updateDots(currentSlide)
        var translateWidth = currentSlide * 100;
        $('.partners__slider_wrapper').attr('style', 'transform: translateX(-' + translateWidth + '%)')
    }
}
console.log($('body').width() + ' | ' + $('body').height())
    /* PARTNERS PAGE SLIDER */

$('.partners__slider_item').click(function() {
    var clickedPartner = $(this).attr('id');
    $('.partners__company').hide();
    $('#partner_' + clickedPartner).show()
    $('.partners__block').attr('style', 'transform: translateX(-100vw)')
})

$('.partners_back').click(function() {
    $('.partners__block').attr('style', 'transform: translateX(0vw)')
})

var bodyWidth = $('body').width()

if (bodyWidth < 1110) {
    $('body').attr('style', 'overflow:scroll')
}