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

// console.log("working?");

var section1;
var section2;
var section3;
var section4;
var section5;
var section6;

var firstHeight = -90;
var secondHeight = -600;

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

document.getElementById('nav-item1').onclick = function(){
    window.scrollTo(0, section1+firstHeight);
};
document.getElementById('nav-item2').onclick = function(){
    window.scrollTo(0, section2+firstHeight);
};
document.getElementById('nav-item3').onclick = function(){
    window.scrollTo(0, section3+firstHeight);
};
document.getElementById('nav-item4').onclick = function(){
    window.scrollTo(0, section4+firstHeight);
};
document.getElementById('nav-item5').onclick = function(){
    window.scrollTo(0, section5+firstHeight);
};
document.getElementById('nav-item6').onclick = function(){
    window.scrollTo(0, section6+firstHeight);
};


window.onscroll = function() {myFunction()};

function myFunction() {

    // document.getElementById("moving-nav").style.marginTop = window.scrollY  + 100 + "px";

    if (window.scrollY  > 90) {
        document.getElementById('moving-nav').style.opacity = "1";
    } else {
        document.getElementById('moving-nav').style.opacity = "0";
    }



    if (window.scrollY  + (window.innerHeight+secondHeight) >= section1) {
        document.getElementById("nav-item1").className = "upTo";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section1) {
        document.getElementById("nav-item1").className = "";
    }

    if (window.scrollY  + (window.innerHeight+secondHeight) >= section2) {
        document.getElementById("nav-item2").className = "upTo";
        document.getElementById("nav-item1").className = "";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section2) {
        document.getElementById("nav-item2").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight+secondHeight) >= section3) {
        document.getElementById("nav-item3").className = "upTo";
        document.getElementById("nav-item2").className = "";
        document.getElementById("nav-item1").className = "";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section3) {
        document.getElementById("nav-item3").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight+secondHeight) >= section4) {
        document.getElementById("nav-item4").className = "upTo";
        document.getElementById("nav-item3").className = "";
        document.getElementById("nav-item2").className = "";
        document.getElementById("nav-item1").className = "";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section4) {
        document.getElementById("nav-item4").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight+secondHeight) >= section5) {
        document.getElementById("nav-item5").className = "upTo";
        document.getElementById("nav-item4").className = "";
        document.getElementById("nav-item3").className = "";
        document.getElementById("nav-item2").className = "";
        document.getElementById("nav-item1").className = "";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section5) {
        document.getElementById("nav-item5").className = "";
    }
    
    if (window.scrollY  + (window.innerHeight+secondHeight) >= section6) {
        document.getElementById("nav-item6").className = "upTo";
        document.getElementById("nav-item5").className = "";
        document.getElementById("nav-item4").className = "";
        document.getElementById("nav-item3").className = "";
        document.getElementById("nav-item2").className = "";
        document.getElementById("nav-item1").className = "";
    } else if (window.scrollY  + (window.innerHeight+secondHeight) < section6) {
        document.getElementById("nav-item6").className = "";
    }
    
}

