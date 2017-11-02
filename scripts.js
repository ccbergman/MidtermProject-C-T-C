$(document).ready(function () {

    var cardClicked;
    var graphics = [];


    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow");
    });

    $('#resetButton').click(function () {
        location.reload();
    });

    // $(function () {
    //     $("card1").flip({
    //         trigger: 'click'
    //     });
    //     $(".front").css("display", "block");
    //     $(".back").css("display", "none");
    // });



});
