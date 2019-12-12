$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="quadrato"></div>');

    }
    $(".quadrato").click(function(){
        var quadCorrente = $(this);
        $.ajax({
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "GET",
            success : function (data){
                if (quadCorrente.hasClass("yellow") || quadCorrente.hasClass("green")) {
                }else{
                    if (data.response <= 5) {
                        quadCorrente.addClass("yellow");
                        console.log(data.response);
                    }else{
                        quadCorrente.addClass("green");
                        console.log(data.response);
                    }
                }


            },
            error : function(){

            }
        });
    });









});
