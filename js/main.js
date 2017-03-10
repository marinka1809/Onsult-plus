$=jQuery

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 3000,
        directionNav: false,
        manualControls: ".slider-preview li"
    });

    artificialLink (".blog .primary-content");
    artificialLink  (".man-squad");
    artificialLink  (".industries-section li");

    function artificialLink(element) {

        $(element).on("click", function (e) {
            if (!(e.target.getAttribute('href')== null)) {
                href= e.target.getAttribute('href');
            }
            else {
                href = $(this).attr("data-href");
            }
            window.location.href=href;
            e.preventDefault();
        });
    };

    $('.questions-ol li').on("click", function (e) {
        $(this).find(".answer").slideToggle(1000);
        $(this).toggleClass("active");
    });
});