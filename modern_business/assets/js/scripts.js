
$(function () {

    "use strict";

    var testim = new Swiper(".testim-sm .testim-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".testim-sm .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

});


$(function () {
    var width = $(window).width();
    if (width > 991) {

        "use strict";

        $(function () {
            let cards = gsap.utils.toArray(".work-card-ms .cards .card-item");
    
            let stickDistance = 0;
    
            let firstCardST = ScrollTrigger.create({
                trigger: cards[0],
                start: "center center"
            });
    
            let lastCardST = ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: "bottom bottom"
            });
    
            cards.forEach((card, index) => {
                var scale = 1 - (cards.length - index) * 0;
                let scaleDown = gsap.to(card, { scale: scale, 'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"' });
    
                ScrollTrigger.create({
                    trigger: card,
                    start: "center center",
                    end: () => lastCardST.start + stickDistance,
                    pin: true,
                    pinSpacing: false,
                    ease: "none",
                    animation: scaleDown,
                    toggleActions: "restart none none reverse"
                });
            });
        });

    }
});