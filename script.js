// $(function() {

//     var $sidebar   = $("#moving-nav"), 
//         $window    = $(window),
//         offset     = $sidebar.offset(),
//         topPadding = 15;

//     $window.scroll(function() {
//         if ($window.scrollTop() > offset.top) {
//             $sidebar.stop().animate({
//                 marginTop: $window.scrollTop() - offset.top + topPadding
//             });
//         } else {
//             $sidebar.stop().animate({
//                 marginTop: 0
//             });
//         }
//     });
    
// });

console.log("working?");

var section1;
var section2;
var section3;
var section4;
var section5;
var section6;

window.addEventListener('load', function() {
    section1 = document.getElementById("1").offsetTop;
    section2 = document.getElementById("2").offsetTop;
    section3 = document.getElementById("3").offsetTop;
    section4 = document.getElementById("4").offsetTop;
    section5 = document.getElementById("5").offsetTop;
    section6 = document.getElementById("6").offsetTop;
});

window.addEventListener('resize', function() {
    section1 = document.getElementById("1").offsetTop;
    section2 = document.getElementById("2").offsetTop;
    section3 = document.getElementById("3").offsetTop;
    section4 = document.getElementById("4").offsetTop;
    section5 = document.getElementById("5").offsetTop;
    section6 = document.getElementById("6").offsetTop;
});


window.onscroll = function() {myFunction()};

function myFunction() {

    document.getElementById("moving-nav").style.marginTop = window.scrollY  + 100 + "px";

    if (window.scrollY  > 150) {
        document.getElementById('moving-nav').style.opacity = "1";
    } else {
        document.getElementById('moving-nav').style.opacity = "0";
    }



    if (window.scrollY  + (window.innerHeight*0.9) > section2) {
        document.getElementById("nav-item2").className = "upTo";
    } else {
        document.getElementById("nav-item2").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section3) {
        document.getElementById("nav-item3").className = "upTo";
    } else {
        document.getElementById("nav-item3").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section4) {
        document.getElementById("nav-item4").className = "upTo";
    } else {
        document.getElementById("nav-item4").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section5) {
        document.getElementById("nav-item5").className = "upTo";
    } else {
        document.getElementById("nav-item5").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight*0.9) > section6) {
        document.getElementById("nav-item6").className = "upTo";
    } else {
        document.getElementById("nav-item6").className = "";
    }
    
}















