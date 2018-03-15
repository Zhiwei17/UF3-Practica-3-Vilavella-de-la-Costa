// Documento JavaScript
$(document).ready(function () {
    
    
    $("#kmten").click(function(){
        $("#kmten").css("background-color", "#064e8c");
        $("#kmmas").css("background-color", "transparent");
    })
    
    $("#kmmas").click(function(){
        $("#kmmas").css("background-color", "#064e8c");
        $("#kmten").css("background-color", "transparent");
    })
    
    $("#enviar").click(function(){
       
        var nombre = $("#formNombre").val();
        var email = $("#formEmail").val();
        
        if(nombre == null || nombre == ""){
            //alert("caca de vaca");
            $("#nameError").css('display', 'block').animate({fontSize: '14px'}, "slow");
            $("#formNombre").css({"border-color": "red", 
             "border-width":"2px", 
             "border-style":"solid"});
        }else{
            
        }
        
    })
})
