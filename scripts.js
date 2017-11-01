$(document).ready(function () {
    console.log("Hi");


    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow").css("display", "block");

    });

    $("#resetButton").on("click", function () {
        $("#gamePage").css("display", "none");;
        $("#startGamePage").fadeIn("slow").css("display", "block");
    });

    // $(function () {
    //     $("#card1").flip({
    //         trigger: 'click'
    //     });
    //     $(".back").css("display", "none");
    //     $(".front").css("display", "block");
    // });

    $('#resetButton').click(function () {
        location.reload();
    });
});
