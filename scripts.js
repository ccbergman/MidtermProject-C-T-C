$(document).ready(function () {

    var cardClicked;
    var secondCardClicked;
    var counter = 0;


    var array = ["images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg", "images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg"];

    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow");
    });

    $('#resetButton').click(function () {
        location.reload();
    });
//restarts the page, and reshuffles the cards once game begins again

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    array = shuffle(array);
    console.log(array);

    $("div.flexBoxes").each(function (i) {
        $(this).css("background-image", "url(" + array[i] + ")");

    });

    $(function () {
        $(".flip").flip({
            trigger: 'click'
        });

      //   $(".flip").on("click", function () {
      //   if ($(this).style(backgroundImage === "url('')") {
      //     cardClicked = $(this);
      //   }
      // }
      // ));

    });



});
