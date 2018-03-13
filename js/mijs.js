// Documento JavaScript
$(document).ready(function () {
    
    
    $("#kmten").click(function(){
        $("#kmten").css("background-color", "#337ab7");
        $("#kmmas").css("background-color", "transparent");
    })
    
    $("#kmmas").click(function(){
        $("#kmmas").css("background-color", "#337ab7");
        $("#kmten").css("background-color", "transparent");
    })
})
