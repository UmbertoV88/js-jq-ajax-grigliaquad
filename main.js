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
                if (data.response <= 5) {
                    // quadCorrente.removeClass("green");
                    quadCorrente.addClass("yellow");
                    console.log(data.response);
                }else{
                    quadCorrente.addClass("green");
                }
            },
            error : function(){

            }
        });
    });









});
