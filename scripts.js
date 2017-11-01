$(document).ready(function () {
    console.log("Hi");

    var cardClicked;

    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow").css("display", "block");

    });

    $("#resetButton").on("click", function () {
        $("#gamePage").css("display", "none");;
        $("#startGamePage").fadeIn("slow").css("display", "block");
    });

    // $(function () {
    //     $("card1").flip({
    //         trigger: 'click'
    //     });
    //     $(".front").css("display", "block");
    //     $(".back").css("display", "none");
    // });

    $('#resetButton').click(function () {
        location.reload();
    });
});
