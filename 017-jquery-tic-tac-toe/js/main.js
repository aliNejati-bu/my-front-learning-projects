/**
 * for work with nav menu
 */

let game = new Game(
    function (gameStatus) {
        sound.playGameAction();
        for (let i = 0; i < gameStatus.length; i++) {
            for (let j = 0; j < gameStatus[i].length; j++) {
                if (gameStatus[i][j]) {
                    let $target = $("#game" + (i + 1) + "" + (j + 1))
                    $target.removeClass("preBlue");
                    $target.removeClass("preRed");
                    $target.html(
                        `
                        <span class="game__place_content active ${gameStatus[i][j] === 1 ? 'blue' : 'red'}">
                ${gameStatus[i][j] === 1 ? 'x' : 'o'}
            </span>
                        `
                    );
                }
            }
        }
    },
    function (winner) {
        for (let i = 0; i < winner.status.length; i++) {
            for (let j = 0; j < winner.status[i].length; j++) {
                if (winner.status[i][j] !== 0) {
                    let $target = $("#game" + (i + 1) + "" + (j + 1));
                    $target.addClass("win");
                }
            }
        }
        sound.winBtn();
    }
);

function menuWork() {
    $(".nav__toggle").click(function (ev) {
        $(this).parent().toggleClass("expanded");
    });
}

function uiWork() {
    let $gamePlace = $(".game__place");
    $gamePlace.on("mouseenter", function () {
        if ($(this).find(".game__place_content").length == 0) {
            if (game.status == "blue") {
                $(this).addClass("preBlue");
            } else {
                $(this).addClass("preRed");
            }
        }
    });
    $gamePlace.on("mouseout", function (ev) {
        $(this).removeClass("preBlue");
        $(this).removeClass("preRed");
    });


    $(".game__place").click(function () {
        let pos = $(this).attr("id").match(/\d\d/)[0];
        let row = (+pos[0]) - 1;
        let col = (+pos[1]) - 1;

        game.playAGame(row, col);

    });


}


$("document").ready(function () {

    // call functions
    menuWork();
    uiWork();
});