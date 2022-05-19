
let courentIndex = 1;

function checkSlide(id,index) {
    courentIndex = index;
    [...document.querySelector(".slider__item_wrapper").children].forEach(element=>{
       element.classList.remove("active")
    });
    document.querySelector(`#${id}`).classList.add("active");
}

setInterval(()=>{
    courentIndex += 1;
    if (courentIndex == 4){
        courentIndex = 1;
    }
    checkSlide(`slider_${courentIndex}`,courentIndex);
},3000);