//jQuery
$(document).ready(function () {
  //Collapse menu bar after click on mobile
  $(".close-bar").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

//TYPEWRITER EFFECT FOR HEADER
let text1 = "Hello.";
let i = 0;
//LINE ONE OF TEXT
function typeWriter1() {
  if (i < text1.length) {
    document.getElementById("jumbo-head-1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter1, 100);
  }
  setTimeout(typeWriter2, 1500);
}

//LINE TWO OF TEXT
let text2 = "My name is Casey.";
let j = 0;

function typeWriter2() {
  $("#cursor1").remove();
  $("#cursor2").show();
  if (j < text2.length) {
    document.getElementById("jumbo-head-2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, 200);
  }
  setTimeout(typeWriter3, 2000);
}
//LINE THREE OF TEXT
let text3 = "I'm a web developer who loves to solve problems.";
let k = 0;
function typeWriter3() {
  $("#cursor2").remove();
  $("#cursor3").show();
  if (k < text3.length) {
    document.getElementById("jumbo-head-3").innerHTML += text3.charAt(k);
    k++;
    setTimeout(typeWriter3, 1000);
  }
  setTimeout(clearCursor, 2500);
}
//REMOVE CURSOR
function clearCursor() {
  $("#cursor3").remove();
}

//FIRES TYPEWRITER AFTER PAGE LOAD
$(window).on("load", typeWriter1);
