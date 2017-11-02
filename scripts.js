$(document).ready(function () {

    var counter = 0;


    var array = ["images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg", "images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg"];

    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow");
    });

    // restarts the page, and reshuffles the cards once game begins again
    $('#resetButton').click(function () {
        location.reload();
    });

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

    //flips the clicked card, and displays the random background image
    $(function flipCard() {
        $(".flip").flip({
            trigger: 'click'
        });

        var click1 = '';
        var click2 = '';
        //We're working on the matching functionality
        $(".flip").on("click", function () {

            if (click1 === '') {
                click1 = $(this);
                console.log(click1);

            } else if (click2 === '') {
                click2 = $(this);
                console.log(click2);

                // test = $(this).style("background-image");
                if (click1.css("background-image") === click2.css("background-image")) {
                  $(click1).fadeTo(3000, 0);
                  $(click2).fadeTo(3000, 0);

                  // $(click1).val('');
                  // $(click2).val('');
                } else {
                //   setTimeout(function() {
                //   flipCard(".flip");
                //   // flipCard(click2);
                //
                // }, 3000);



                    //They don't match
                    //if they don't match flip them back over
                    // reset click1 & click2
                }
            }
        });
    });

});
