/**
 * for work with nav menu
 */
function menuWork() {
    $(".nav__toggle").click(function (ev) {
        $(this).parent().toggleClass("expanded");
    });
}


$("document").ready(function () {

    // call functions
    menuWork();
});