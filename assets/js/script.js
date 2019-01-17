
    $(document).ready(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: false,
            nav: false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                250: {
                    items: 2
                },
                500: {
                    items: 3
                },
                750: {
                    items: 4
                }
            }
        });
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        $('.contents_projects_nextbutton').click(function () {
            owl.trigger('next.owl.carousel');
        })
        $('.contents_projects_backbutton').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        })


        $('#header_button_1').hover(function () {
            $('.header_pointer').toggleClass("navHover01");
        });
        $('#header_button_2').hover(function () {
            $('.header_pointer').toggleClass("navHover02");
        });
        $('#header_button_3').hover(function () {
            $('.header_pointer').toggleClass("navHover03");
        });
        $('#header_button_4').hover(function () {
            $('.header_pointer').toggleClass("navHover04");
        });
    });
objectFitImages('.back_keyimage_layer');

