/**
 * for work with nav menu
 */
function menuWork() {
    $(".nav__toggle").click(function (ev) {
        $(this).parent().toggleClass("expanded");
    });
}

function uiWork() {
    let $gamePlace = $(".game__place");
    $gamePlace.on("mouseenter", function () {
        if ($(this).find(".game__place_content").length == 0){
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
}


$("document").ready(function () {

    // call functions
    menuWork();
    uiWork();
});