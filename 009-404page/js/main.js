let menu = document.getElementById("nav-menu"),
    menu_toggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

menu_toggle.addEventListener("click",function (){
    menu.classList.add("nav__open_menu");
});



navClose.addEventListener("click",()=>{
    menu.classList.remove("nav__open_menu");
})

document.querySelectorAll(".nav__menu_item").forEach(ele=>{
    ele.addEventListener("click",()=>{
        menu.classList.remove("nav__open_menu");
    });
})