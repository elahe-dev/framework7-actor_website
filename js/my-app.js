var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'آذرخش فراهانی',
    // App id
    id: 'com.myapp.test',

    panel: {
        //swipe: 'both',
    },
    dialog: {
        buttonOk: 'باشه',
        //
    },
    // Add default routes
    routes: [{
            path: '/p1/',
            pageName: 'page1',
            on: {
                pageAfterIn: function(e, page) {}
            }
        },
        {
            path: '/p2/',
            pageName: 'page2',
            on: {
                pageAfterIn: function(e, page) {
                    var listIndex = app.listIndex.create({
                        // ".list-index" element
                        el: '.list-index',
                        // List el where to look indexes and scroll for
                        listEl: '.contacts-list',
                        // Generate indexes automatically based on ".list-group-title" and ".item-divider"
                        indexes: 'auto',
                        // Scroll list on indexes click and touchmove
                        scrollList: true,
                        // Enable bubble label when swiping over indexes
                        label: true,
                    });
                }
            }
        },
        {
            path: '/p3/',
            pageName: 'page3',
            on: {
                pageAfterIn: function(e, page) {
                    var swiper3 = new Swiper('.swiper-latestPost', {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        breakpoints: {
                            // when window width is <= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // when window width is <= 480px
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                        }
                    });
                }
            }
        },
        {
            path: '/p4/',
            pageName: 'page4',
            on: { pageAfterIn: function(e, page) {} }
        },
        {
            path: '/p5/',
            pageName: 'page5',
            on: { pageAfterIn: function(e, page) {} }
        },


    ],
    clicks: {
        externalLinks: ".external"
    },
    // ... other parameters
});

var mainView = app.views.create('.view-main', {
    stackPages: true,
    pushState: true,
});


//==================================================
$(document).on('page:beforein', function(e) {
    $('.page-content').scrollTop(0);
});
$('.page-content').on('scroll', function() {
    //alert(0);
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
        $(".scroll-top").css('display', 'block');
    } else { $(".scroll-top").css('display', 'none'); }
});

$(".scroll-top").click(function() {
    $('.page-content').scrollTop(0, 600);
    $(this).css('display', 'none');
});
//==================================================
/*page1 scrol swiper*/
var swiper1 = new Swiper('.swiper-scrol', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
});
/* */
var swiper2 = new Swiper('.swiper-latestPost', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
});