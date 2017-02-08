$=jQuery

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 3000,
        directionNav: false,
        manualControls: ".slider-preview li"
    });

    $(".blog .primary-content").css ("cursor", "pointer");

    $(".blog .primary-content").on("click", function (e) {
        if (!(e.target.getAttribute('href')== null)) {
          href= e.target.getAttribute('href');
        }
        else {
            href = $(this).attr("data-href");
        }
        window.location.href=href;
        e.preventDefault();
    });
});