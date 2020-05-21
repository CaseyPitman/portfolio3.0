//jQuery
$(document).ready(function(){
    //Collapse menu bar after click on mobile

    $(".close-bar").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    //TYPEWRITER EFFECT FOR HEADER

    //Blinking Cursor
    function cursorBlink() {
        $('#cursor').fadeOut(500);
        $('#cursor').fadeIn(500);
    }
    setInterval(cursorBlink, 1000);

  




}); //end jQuery

