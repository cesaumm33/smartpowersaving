$(document).ready(function() {
    $("#potencia").keyup(function(){
        calcularKwh();
    });

    function calcularKwh(parteCima){
        var potencia = $("#potencia").val();
        var h = $("#h").val();
        var dias = $("#dias").val();
        
        var resultado = (potência*h*dias)/(1000/60);
        $("#kwh").html(resultado + "kw/h");
    }
});