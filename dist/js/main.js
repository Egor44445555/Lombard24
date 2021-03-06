$(document).ready(function() {
    let _html = $('html');
    let body = $('body');
    let customScroll = $(".js-custom-scroll");
    let tooltip = $('[data-toggle="tooltip"]');
    let optionsBtn = $('.options-btn');
    let optionsWrap = $('.options-wrap');
    let categoryItem = $('.main-menu--item');
    let categoryItemBody = $('.main-menu-modal');
    let overflow = $('.overflow');
    let cartModal = $('.cart-modal');
    let cartBtn = $('.icon-list--item.cart');
    let backCatalogBtn = $('.back-catalog');
    let mobileMenu = $('.mobile-menu-wrap');
    let catalogBtn = $('.catalog-btn');
    let modalMenu = $('.modal-menu-wrap');
    let modalMenuClose = $('.modal-menu-wrap .close');
    let gridBtn = $('.grid-type--item');
    let characteristicsList = $('.characteristics-list');
    let characteristicsItem = $('.characteristics-list--item');
    let characteristicsMoreBtn = $('.characteristics-list .more-btn');

    catalogBtn.on('click', function (e) {
        e.preventDefault();

        modalMenu.toggleClass('open');
        $(this).toggleClass('active');

        if (_html.hasClass('noscroll')) {
            _html.addClass('noscroll');
            body.addClass('noscroll');
        } else {
            _html.removeClass('noscroll');
            body.removeClass('noscroll');
        }

        return false
    });

    modalMenuClose.on('click', function (e) {
        modalMenu.removeClass('open');
        mobileMenu.removeClass('open');
        _html.removeClass('noscroll');
        body.removeClass('noscroll');
        overflow .removeClass('active');

        return false
    });

    $('.js-mobile-menu-btn').on('click', function (e) {
        e.preventDefault();

        $('html, body').addClass('noscroll');
        mobileMenu.addClass('open');
    });

    $('.mobile-menu-wrap .close, .mobile-menu-wrap .overflow').on('click', function (e) {
        e.preventDefault();

        $('html, body').removeClass('noscroll');
        mobileMenu.removeClass('open');
    });

    $('[data-remove-cart-select]').on("click", function(e) {
        e.preventDefault();

        $('.cart-list--item').each(function () {

            if ($(this).find('.checkbox input')[0].checked) {
                $(this).remove();
            }
        });
    });

    $('[data-remove-product-cart]').on("click", function(e) {
        e.preventDefault();

        $(this).parents('.cart-list--item').remove();
    });

    $('.select-all input').on('change', function () {

        if ($(this)[0].checked) {

            $('.cart-list--item').each(function () {
                $(this).find('.checkbox input')[0].checked = true;
            });
        } else {

            $('.cart-list--item').each(function () {
                $(this).find('.checkbox input')[0].checked = false;
            });
        }
    });


    if (characteristicsList[0] && characteristicsItem.length < 3) {
        characteristicsMoreBtn.hide();
    } else {
        characteristicsList.addClass('hide-more');
    }

    characteristicsMoreBtn.on('click', function () {
        characteristicsList.toggleClass('open');
    });


    $('.fancybox').fancybox();

    tooltip.tooltip({
        html: true,
        placement: 'bottom',
    });

    customScroll.mCustomScrollbar();

    if (window.innerWidth < 769) {
        $(".js-custom-scroll-mobile").mCustomScrollbar();
    }

    window.onresize = function() {
        customScroll.mCustomScrollbar();
        cartModalPosition();
    };

    $(document).on('click', function(e) {

        if(!$(e.target).closest('.options-wrap').length) {
            optionsWrap.removeClass('active');
        }
    });

    cartBtn.on("click", function(e) {
        e.preventDefault();
        cartModal.addClass('active');
        overflow.addClass('active');
        overflow.addClass('cart-open');
        categoryItemBody.removeClass('active');
    });

    function cartModalPosition() {
        let rect = cartBtn[0].getBoundingClientRect();

        cartModal.css('top', rect.top + 60);
        cartModal.css('left', rect.left - cartModal.width() + 85);
    }
    cartModalPosition();

    overflow.on("click", function(e) {
        categoryItemBody.removeClass('active');
        cartModal.removeClass('active');
        cartBtn.removeClass('active');
        overflow.removeClass('active');
        overflow.removeClass('cart-open');
    });

    optionsBtn.on("click", function() {
        optionsWrap.removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.eye').on('click', function(e) {
        if($(this).hasClass('active')) {
            $(this).parent().find('input').attr('type', 'password');
            $(this).removeClass('active');
        } else {
            $(this).parent().find('input').attr('type', 'text');
            $(this).addClass('active');
        }
    });


    /*** Password ***/

    $('.password-wrap .icon').on("click", function() {
        $(this).toggleClass('active');
        if($(this).parent().find('input')[0].type === 'password') {
            $(this).parent().find('input')[0].type = 'text'
        } else {
            $(this).parent().find('input')[0].type = 'password'
        }
    });


    /***/

    $(".datepicker").datepicker({
        dateFormat: 'dd.mm.y',
    });

    $(".datepicker-from").datepicker({
        defaultDate: "+1w",
        dateFormat: 'dd.mm.y',
        numberOfMonths: 1,
        closeText: '??????????????',
        prevText: '????????????????????',
        nextText: '??????????????????',
        currentText: '??????????????',
        monthNames: ['????????????','??????????????','????????','????????????','??????','????????','????????','????????????','????????????????','??????????????','????????????','??????????????'],
        monthNamesShort: ['??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????'],
        dayNames: ['??????????????????????','??????????????????????','??????????????','??????????','??????????????','??????????????','??????????????'],
        dayNamesShort: ['??????','??????','??????','??????','??????','??????','??????'],
        dayNamesMin: ['????','????','????','????','????','????','????'],
        weekHeader: '????',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });

    $(".datepicker-to").datepicker({
            defaultDate: "+1w",
            dateFormat: 'dd.mm.y',
            numberOfMonths: 1,
            closeText: '??????????????',
            prevText: '????????????????????',
            nextText: '??????????????????',
            currentText: '??????????????',
            monthNames: ['????????????','??????????????','????????','????????????','??????','????????','????????','????????????','????????????????','??????????????','????????????','??????????????'],
            monthNamesShort: ['??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????','??????'],
            dayNames: ['??????????????????????','??????????????????????','??????????????','??????????','??????????????','??????????????','??????????????'],
            dayNamesShort: ['??????','??????','??????','??????','??????','??????','??????'],
            dayNamesMin: ['????','????','????','????','????','????','????'],
            weekHeader: '????',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });


    gridBtn.on("click", function(e) {
        e.preventDefault();

        gridBtn.removeClass('active');
        $(this).addClass('active');

        if ($(this).data('type') === 'list') {
            $('.product-list').addClass('type-list');
        } else {
            $('.product-list').removeClass('type-list');
        }
    });


    /*** Tabs ***/

    $('.tabs-head--item').on("click", function() {
        let id = $(this).attr('data-tab'),
            content = $('.tabs-body--item[data-tab="'+ id +'"]');

        $('.tabs-head--item.active').removeClass('active');
        $(this).addClass('active');

        $('.tabs-body--item.active').removeClass('active');

        content.addClass('active');
    });

    let categoryItemArrow = $('.modal-menu-wrap .collections-list--item .arrow');
    let categoryItemTitle = $('.modal-menu-wrap .title-wrap .title');

    function categoryTab(item, event) {
        let id = item.attr('data-tab'),
            content = $('.main-menu-modal[data-tab="' + id + '"]');

        if (event === 'hover') {

            if (!item.hasClass('active')) {
                content.removeClass('active');
            }

            $('.main-menu--item.active').removeClass('active');
        }

        item.addClass('active');
        $('.main-menu-modal.active').removeClass('active');

        content.addClass("active");
        overflow.addClass('active');
    }

    categoryItemArrow.on("click", function () {
        categoryItemTitle.text($(this).data('tab'));
        backCatalogBtn.addClass('catalog-active');
        categoryTab($(this), 'click');
    });

    categoryItem.on('click', function () {
        categoryTab($(this), 'hover');
    });

    backCatalogBtn.on('click', function (e) {
        e.preventDefault();

        if (backCatalogBtn.hasClass('catalog-active')) {
            backCatalogBtn.removeClass('catalog-active');
            categoryItemBody.removeClass('active');
            categoryItemTitle.text('?????????????? ??????????????');
        } else {
            modalMenu.removeClass('open');
        }

        return false
    });

    categoryItemBody.mouseleave(function () {
        categoryItemBody.removeClass('active');
        categoryItem.removeClass('active');
        overflow.removeClass('active');
    });

    /*** End Tabs ***/


    /*** Spoiler ***/

    let spoilerItemHead = $('.spoiler--head');
    let spoilerItem = $('.spoiler--item');
    let grayBlockBtn = $('.gray-block-arrow');
    let treatiesListItem = $('.gray-block-spoiler--item');
    let innerSettingsListBtn = $('.inner-settings-list--head');

    spoilerItemHead.on("click", function () {
        $(this).parent().toggleClass('active');

        setTimeout(() => {

            $('html, body').animate({
                scrollTop: $(this).offset().top - 100
            }, 100);
        }, 300);

        spoilerItem.each(function () {

            if (!$(this).hasClass('active')) {
                $(this).parent().removeClass('active');
                $(this).parent().find('.spoiler--body').slideUp();
            }
        });

        if (!$(this).parent().hasClass('active')) {
            spoilerItem.removeClass('active');
            $(this).parent().find('.spoiler--body').slideUp();
            $(this).parent().removeClass('active');
        } else {
            spoilerItem.removeClass('active');
            $(this).parent().addClass('active');
            $(this).parent().find('.spoiler--body').slideDown();
        }
    });

    grayBlockBtn.on('click', function () {
        $(this).parents('.gray-block-spoiler--item').toggleClass('active');

        treatiesListItem.each(function () {

            if (!$(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('.gray-block-spoiler--body').slideUp();
            }
        });

        if (!$(this).parents('.gray-block-spoiler--item').hasClass('active')) {
            $(this).parents('.gray-block-spoiler--item').find('.gray-block-spoiler--body').slideUp();
            $(this).parents('.gray-block-spoiler--item').removeClass('active');
        } else {
            $(this).parents('.gray-block-spoiler--item').addClass('active');
            $(this).parents('.gray-block-spoiler--item').find('.gray-block-spoiler--body').slideDown();
        }
    });

    innerSettingsListBtn.on('click', function () {
        $(this).parents('.inner-settings-list--item').toggleClass('active');

        treatiesListItem.each(function () {

            if (!$(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('.inner-settings-list--body').slideUp();
            }
        });

        if (!$(this).parents('.inner-settings-list--item').hasClass('active')) {
            $(this).parents('.inner-settings-list--item').find('.inner-settings-list--body').slideUp();
            $(this).parents('.inner-settings-list--item').removeClass('active');
        } else {
            $(this).parents('.inner-settings-list--item').addClass('active');
            $(this).parents('.inner-settings-list--item').find('.inner-settings-list--body').slideDown();
        }
    });

    $('.spoiler-one--head').on('click', function () {
        $(this).parent().toggleClass('active');

        if (!$(this).parent().hasClass('active')) {
            $(this).parent().find('.spoiler-one--body').slideUp();
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
            $(this).parent().find('.spoiler-one--body').slideDown();
        }
    });

    /*** End Spoiler ***/


    /*** Sliders ***/

    new Swiper('.js-slider-list', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: true,
        navigation: {
            nextEl: ".js-slider-list .swiper-button-next",
            prevEl: ".js-slider-list .swiper-button-prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
            1281: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
            1601: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 80,
            }
        }
    });

    let galleryPreview = new Swiper('.js-gallery-nav', {
        slidesPerView: 3,
        direction: "horizontal",
        navigation: {
            nextEl: ".gallery-nav-wrap .swiper-button-next",
            prevEl: ".gallery-nav-wrap .swiper-button-prev",
        },
        breakpoints: {
            561: {
                slidesPerView: 3,
                direction: "vertical",
            },
        }
    });

    new Swiper('.js-gallery', {
        slidesPerView: 1,
        direction: "horizontal",
        simulateTouch: false,
        allowTouchMove: true,
        thumbs: {
            swiper: galleryPreview,
        },
        breakpoints: {
            561: {
                direction: "vertical",
                allowTouchMove: false,
            },
        }
    });


    /*** Range slider ***/

    let $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

    if($range.length > 0) {

        $range.ionRangeSlider({
            skin: "round",
            type: "double",
            min: min,
            max: max,
            from: 200,
            to: 800,
            hide_min_max: true,
            onStart: updateInputs,
            onChange: updateInputs,
            onFinish: updateInputs
        });
        instance = $range.data("ionRangeSlider");

        function updateInputs(data) {
            from = data.from;
            to = data.to;

            $inputFrom.prop("value", from);
            $inputTo.prop("value", to);
        }

        $inputFrom.on("change", function () {
            let val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > to) {
                val = to;
            }

            instance.update({
                from: val
            });

            $(this).prop("value", val);

        });

        $inputTo.on("change", function () {
            let val = $(this).prop("value");

            // validate
            if (val < from) {
                val = from;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                to: val
            });

            $(this).prop("value", val);
        });
    }
    
    /*** End Sliders ***/


    /*** Modal ***/

    let idModal = null;

    $('.modal-btn').on("click", function() {

        if($(this).attr('href')) {
            idModal = $(this).attr('href');
            idModal = idModal.slice(1, idModal.length);
        } else {
            idModal = $(this).attr('data-url');
        }

        $('.modal-wrap').each(function () {

            if(idModal === $(this).attr('id')) {
                $(this).addClass('open');

                body.css('padding-right', (window.innerWidth - document.documentElement.clientWidth));
                body.addClass('noscroll');
            }
        });
    });

    $('.modal-wrap .overflow').css('left', -(window.innerWidth - document.documentElement.clientWidth));

    $('.modal-wrap .overflow, .modal-wrap .close').on("click", function() {
        body.removeClass('noscroll').css('padding-right', 0);
        $('.modal-wrap').removeClass('open');
        idModal = null;
    });

    $('.modal-menu-wrap .close, .modal-menu-overflow').on("click", function() {
        $('.modal-menu-wrap').removeClass('open');
        $('.modal-menu-overflow').removeClass('active');
    });

    /*** End Modal ***/

    
    /*** Custom select ***/

    $('.custom-select').each(function () {
        let classes = $(this).attr('class');
        let template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger"><span>' + $(this).attr('placeholder') + '</span><span class="icon ico-arrow-angle-bold"></span></span>';
        
        template += '<div class="custom-options">';
        $(this).find('option')
            .each(function () {
                let data = $(this).attr("value");
                let templateCity = '';

                template +=
                    '<span class="custom-option">' +
                        '<span class="wrap">' +
                            templateCity +
                            '<span class="text">' + data + '</span>' +
                        '</span>' +
                    '</span>'
            });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).after(template)
        $('.custom-options').mCustomScrollbar();
    });
    $('.custom-option:first-of-type').hover(
        function () {
            $(this).parents('.custom-options').addClass('option-hover')
        },
        function () {
            $(this).parents('.custom-options').removeClass('option-hover')
        }
    );
    $('.custom-select-trigger').on('click', function (event) {
        $('.custom-select').removeClass('opened');

        $('html').on('click', function () {
            $('.custom-select').removeClass('opened');
        });

        $(this).parents('.custom-select').toggleClass('opened');
        event.stopPropagation();
    });

    $('.custom-option').on('click', function () {
        let valueSelect = $(this).find('.text').text();
        let template = '';

        template += '<span>' + valueSelect + '</span><span class="icon ico-arrow-angle-bold"></span>'

        $(this).parents('.custom-select-wrapper').find('select').val(valueSelect);
        $(this).parents('.custom-options').find('.custom-option').removeClass('selection');
        $(this).addClass('selection');
        $(this).parents('.custom-select').removeClass('opened');
        $(this).parents('.custom-select').find('.custom-select-trigger').html(template).addClass('added');
    });


    /*** Count numbers ***/

    let time = 2,
        count = 1;

    $(window).scroll(function() {
        $('.percent-status').each(function() {
            let position = $(this).offset().top,
                topWindow = $(window).scrollTop();

            if (position < topWindow + 400) {

                if (count < 2) {

                    $('div').each(function() {
                        let i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this).find('span'),
                            int = setInterval(function() {

                                if (i <= num) {
                                    that.html(i + '%');
                                } else {
                                    count = count + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });

    /*** End Count numbers ***/
});
