//jQuery
$(document).ready(function(){
    //Collapse menu bar after click on mobile

    $(".close-bar").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    $("#submit-msg").on("click", function(){
        $('#contact-form-container').hide();
        $('#thanks').show();
    })




}); //end jQuery

