$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="quadrato"></div>');

    }
    $(".quadrato").click(function(){
        if (!($(this).hasClass("yellow") || $(this).hasClass("green"))) {
            var quadCorrente = $(this);
            $.ajax({
                url : "https://flynn.boolean.careers/exercises/api/random/int",
                method : "GET",
                success : function (data){
                    var numeroRandom = data.response;
                    cambioColore(numeroRandom, quadCorrente);
                },
                error : function(){

                }
            });
        }
    });


function cambioColore(numero, quadrato){
    if (numero <= 5) {
        quadrato.addClass("yellow");
        console.log(numero);
        quadrato.text(numero);
    }else{
        quadrato.addClass("green");
        console.log(numero);
        quadrato.text(numero);

    }

};

});
