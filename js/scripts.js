$(document).ready(function(){
    $('.nav li a,.btn.btn-success').click(function(e) {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
});