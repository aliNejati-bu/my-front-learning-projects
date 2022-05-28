let menu = document.getElementById("nav-menu"),
    menu_toggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

menu_toggle.addEventListener("click", function () {
    menu.classList.add("nav__open_menu");
});


navClose.addEventListener("click", () => {
    menu.classList.remove("nav__open_menu");
})

document.querySelectorAll(".nav__menu_item").forEach(ele => {
    ele.addEventListener("click", () => {
        menu.classList.remove("nav__open_menu");
    });
})

const sr = ScrollReveal({
    distance: "90px",
    duration: 3000
});

sr.reveal('.home__data', {
    origin: 'top',
    delay: 400
});
sr.reveal('.home__ghost', {
    origin: 'bottom',
    delay: 400
});
sr.reveal('.footer', {
    origin: 'bottom',
    delay: 500
});