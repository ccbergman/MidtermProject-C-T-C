$(document).ready(function () {

    var cardClicked;
    var graphicsArray = ["images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg"];


    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow");
    });

    $('#resetButton').click(function () {
        location.reload();
    });



    // $(function () {
    //     $(".card").flip({
    //         trigger: 'click'
    //     });
    //     $(".cardFront").css("display", "block");
    //     $(".cardBack").css("display", "none");
    // });


});
