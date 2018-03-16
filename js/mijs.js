// Documento JavaScript
$(document).ready(function () {


    $("#kmten").click(function () {
        $("#kmten").css("background-color", "#064e8c");
        $("#kmmas").css("background-color", "transparent");
    })
    
      $("#kmten").keypress(function () {
        $("#kmten").css("background-color", "#064e8c");
        $("#kmmas").css("background-color", "transparent");
    })
    

    $("#kmmas").click(function () {
        $("#kmmas").css("background-color", "#064e8c");
        $("#kmten").css("background-color", "transparent");
    })
    
       $("#kmmas").keypress(function () {
        $("#kmmas").css("background-color", "#064e8c");
        $("#kmten").css("background-color", "transparent");
    })

    $("#enviar").click(function () {

        var nombre = $("#formNombre").val();
        var email = $("#formEmail").val();

        if (nombre == null || nombre == "") {
            //alert("caca de vaca");
            $("#nameError").css('display', 'block').animate({
                fontSize: '14px'
            }, "slow");
            $("#formNombre").css({
                "border-color": "red",
                "border-width": "2px",
                "border-style": "solid"
            });
        }

        if (email == null || email == "") {
            //alert("caca de vaca");
            $("#emailError").css('display', 'block').animate({
                fontSize: '14px'
            }, "fast");
            $("#formEmail").css({
                "border-color": "red",
                "border-width": "2px",
                "border-style": "solid"
            });
        }

        var zulul = 0;

        if (email != "") {




            $("#emailError").css('display', 'none').animate({
                fontSize: '14px'
            }, "fast");
            $("#formEmail").css({
                "border-width": "0px",
            });

            zulul = zulul + 1;

        }

        if (nombre != "") {
            $("#nameError").css('display', 'none').animate({
                fontSize: '14px'
            }, "fast");
            $("#formNombre").css({
                "border-width": "0px",
            });
            zulul = zulul + 1;
        }

        if (zulul == 2) {
            window.location.replace("gracias.html");
        }
    })


    //is this the posiblu snipet for the snipt asdaddaksdwpe??
    var vids = $("video");
    $.each(vids, function(){
        
        this.controls = false;

        $(this).click(function(){
            this.controls = true;
        })
        
    });




})
