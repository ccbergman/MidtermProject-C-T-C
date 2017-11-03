$(document).ready(function () {

    var counter = 0;

    //array of all photos to be shuffled(using each photo twice)
    var array = ["images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg", "images/aquaman.sm.jpg", "images/captainamerica.sm.jpg", "images/deadpool.sm.jpg",
        "images/flash.sm.jpg", "images/ironman.sm.jpg", "images/spooooderman.sm.jpg"];

    $("#startButton").on("click", function () {
        $("#startGamePage").css("display", "none");
        $("#gamePage").fadeIn("slow");
    });

    // restarts the page and reshuffles the cards once game begins again
    $('#resetButton').click(function () {
        location.reload();
    });

    //function to randomize the cards
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

    //this loads the randomized images onto the cards
    $("div.flexBoxes").each(function (i) {
        $(this).css("background-image", "url(" + array[i] + ")");

    });

    //flips the clicked card and displays the random background image pulled from array
    $(function flipCard() {
        $(".flip").flip({
            trigger: 'click'
        });

        var click1 = '';
        var click2 = '';

        $(".flip").on("click", function () {

            if (click1 === '') {
                click1 = $(this);

            } else if (click2 === '') {
                click2 = $(this);

                //gets ids after determining what's in each click, stops problem of the a double click counting as a match
                if (click1.css("background-image") === click2.css("background-image") &&
                    ($(click1).get(0).children[0].id !== $(click2).get(0).children[0].id)) {
                    $(click1).fadeTo(3000, 0);
                    $(click2).fadeTo(3000, 0);
                    click1 = "";
                    click2 = "";
                }
                //cards return back to their original state (flip-back)
                else {
                    setTimeout(function () {
                        $(click1).flip(false);
                        $(click2).flip(false);
                        setTimeout
                        click1 = "";
                        click2 = "";
                    }, 2000);
                }
            }
        });
    });
});
