//jQuery
$(document).ready(function(){
    //Collapse menu bar after click on mobile

    $(".close-bar").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });



    //form stuff

    var message = "";

$("#submit-msg").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/dynamicrealities@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});



}); //end jQuery

