$(document).ready(function(){
    $("#judul").click(function(){
        $(".artikel").slideUp();
    });

    $("#data").mouseenter(function(){
        $("#paragraf").slideUp();
    });
    $("#data").mouseleave(function(){
        $("#paragraf").slideDown();
    });

    $(".ubah").on({
        mouseenter: function(){
            $(this).css("background-color","red");
        },
        mouseleave: function(){
            $(this).css("background-color","yellow");
        },
        click: function(){
            $(this).css("background-color","blue");
        }
    });
});