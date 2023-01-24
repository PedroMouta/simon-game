// INITIATE THE GAME
$("body").on("keypress", function () {
    nextSequence();
});

// ADD A NEW BUTTON TO THE SEQUENCE
var level = 1;
var array = [];
function nextSequence() {

    $("h1").html("Level " + level);

    var color = Math.floor(Math.random() * 4) + 1;
    array.push(color);
    console.log(array);

    switch (color) {

        case 1:
            new Audio('sounds/green.mp3').play();
            $(".green").addClass("pressed");
            setTimeout(function () {
                $(".green").removeClass("pressed");
            }, 100)
            $(".green").addClass("mark");
            break;

        case 2:
            new Audio('sounds/red.mp3').play();
            $(".red").addClass("pressed");
            setTimeout(function () {
                $(".red").removeClass("pressed");
            }, 100)
            $(".red").addClass("mark");
            break;

        case 3:
            new Audio('sounds/yellow.mp3').play();
            $(".yellow").addClass("pressed");
            setTimeout(function () {
                $(".yellow").removeClass("pressed");
            }, 100)
            $(".yellow").addClass("mark");
            break;

        case 4:
            new Audio('sounds/blue.mp3').play();
            $(".blue").addClass("pressed");
            setTimeout(function () {
                $(".blue").removeClass("pressed");
            }, 100)
            $(".blue").addClass("mark");
            break;

        default: alert("Something went wrong!");
    }
    level++
}

//IF RIGHT OR WRONG
$(".btn").on("click", function () {
    if ($(this).hasClass("mark")) {
        $(this).removeClass("mark");

        setTimeout(function () {
            nextSequence();
        }, 1000);

    } else {
        $("h1").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        new Audio('sounds/wrong.mp3').play();
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100)
        array = [];
    }
});




//-------------------------------- 

//WHEN I CLICK A BUTTON, THERE'S ALWAYS AN AUDIO

$(".btn").on("click", function () {

    switch (this) {

        case green:
            new Audio('sounds/green.mp3').play();
            $(".green").addClass("pressed");
            setTimeout(function () {
                $(".green").removeClass("pressed");
            }, 100)
            break;

        case red:
            new Audio('sounds/red.mp3').play();
            $(".red").addClass("pressed");
            setTimeout(function () {
                $(".red").removeClass("pressed");
            }, 100)
            break;

        case yellow:
            new Audio('sounds/yellow.mp3').play();
            $(".yellow").addClass("pressed");
            setTimeout(function () {
                $(".yellow").removeClass("pressed");
            }, 100)
            break;

        case blue:
            new Audio('sounds/blue.mp3').play();
            $(".blue").addClass("pressed");
            setTimeout(function () {
                $(".blue").removeClass("pressed");
            }, 100)
            break;
    }
});

/*
function previousSequence(i) {

    setTimeout(function () {
        switch (array[i]) {

            case 1:
                new Audio('sounds/green.mp3').play();
                $(".green").addClass("pressed");
                setTimeout(function () {
                    $(".green").removeClass("pressed");
                }, 100)
                break;

            case 2:
                new Audio('sounds/red.mp3').play();
                $(".red").addClass("pressed");
                setTimeout(function () {
                    $(".red").removeClass("pressed");
                }, 100)
                break;

            case 3:
                new Audio('sounds/yellow.mp3').play();
                $(".yellow").addClass("pressed");
                setTimeout(function () {
                    $(".yellow").removeClass("pressed");
                }, 100)
                break;

            case 4:
                new Audio('sounds/blue.mp3').play();
                $(".blue").addClass("pressed");
                setTimeout(function () {
                    $(".blue").removeClass("pressed");
                }, 100)
                break;
        }
    }, 500 * i);
}
*/