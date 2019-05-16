$(function() {

    var $sidebar   = $("#navigation"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 1000);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});

$("#b1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#1").offset().top
    }, 1200);
});

$("#b2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#2").offset().top
    }, 1200);
});

$("#b3").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#3").offset().top
    }, 1200);
});

$("#b4").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#4").offset().top
    }, 1200);
});

$("#b5").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#5").offset().top
    }, 1200);
});

$("#b6").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#6").offset().top
    }, 1200);
});

$("#b7").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#7").offset().top
    }, 1200);
});

$("#b8").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#8").offset().top
    }, 1200);
});