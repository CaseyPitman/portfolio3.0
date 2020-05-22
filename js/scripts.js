//jQuery
$(document).ready(function(){
    //Collapse menu bar after click on mobile

    $(".close-bar").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    //TYPEWRITER EFFECT FOR HEADER

    //Blinking Cursor
    

    //Typing
    let text1="Hello."
    let i=0;
    
        function typeWriter1() {
            /*function cursorBlink() {
                $('#cursor1').fadeOut(500);
                $('#cursor1').fadeIn(500);
            }*/
           // setInterval(cursorBlink, 1000);
            if (i < text1.length) {
            document.getElementById("jumbo-head-1").innerHTML += text1.charAt(i);
            i++;
            //Math.floor(Math.random()*201)+10;
            setTimeout(typeWriter1, 100);
            }   
            setTimeout(typeWriter2, 1000);  
        } 

  

    let text2="My name is Casey."
    let j=0;

        function typeWriter2() {
            $("#cursor1").remove();
            $("#cursor2").show();
            /*function cursorBlink() {
                $('#cursor2').fadeOut(500);
                $('#cursor2').fadeIn(500);
            }
            setInterval(cursorBlink, 1000);*/
            if (j < text2.length) {
            document.getElementById("jumbo-head-2").innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, 200);
            }   
            setTimeout(typeWriter3, 2000);
        }

        let text3="I'm a web developer who loves to solve problems."
        let k=0;
        function typeWriter3() {
          $("#cursor2").remove();
          $("#cursor3").show();
            /*function cursorBlink() {
                $('#cursor3').fadeOut(500);
                $('#cursor3').fadeIn(500);
            }
            setInterval(cursorBlink, 1000);*/
            if (k < text3.length) {
            document.getElementById("jumbo-head-3").innerHTML += text3.charAt(k);
            k++;
           //let speed3=Math.floor(Math.random()*501)+10;
            setTimeout(typeWriter3, 1000);
            }  
            setTimeout(clearCursor, 2000);
        } 

        function clearCursor(){
            $("#cursor3").remove();
        }
  typeWriter1();

}); //end jQuery

