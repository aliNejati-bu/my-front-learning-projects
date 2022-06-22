let sliderItems = document.querySelectorAll(".content");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let currentSlider = 0;

// set first slider to active
for (let i = 0; i < sliderItems.length; i++) {
    if (i == 0) {
        sliderItems[i].classList.add("active")
    } else {
        sliderItems[i].classList.remove("active")
    }
}


let toggles = document.querySelector(".page-toggle")
toggles.innerHTML = "";


// create toggle buttons
let contentCount = sliderItems.length;
for (let i = 0; i < contentCount; i++) {
    let t = document.createElement("i")
    t.className = "fa fa-circle toggle";
    if (i == 0) {
        t.className = "fa fa-circle in toggle";
    }
    t.id = `item_${i}`;

    toggles.appendChild(t);
}


// go to next slide
nextBtn.addEventListener("click", () => {
    sliderItems[currentSlider].classList.remove("active");
    document.getElementById(`item_${currentSlider}`).classList.remove("in");
    currentSlider++;

    if (currentSlider >= contentCount) {
        currentSlider = 0;
    }
    sliderItems[currentSlider].classList.add("active");
    document.getElementById(`item_${currentSlider}`).classList.add("in");
})


// go to prev slide
prevBtn.addEventListener("click", () => {
    sliderItems[currentSlider].classList.remove("active");
    document.getElementById(`item_${currentSlider}`).classList.remove("in");
    currentSlider--;

    if (currentSlider < 0) {
        currentSlider = contentCount - 1;
    }
    sliderItems[currentSlider].classList.add("active");
    document.getElementById(`item_${currentSlider}`).classList.add("in");
})


// clickBtn
document.querySelectorAll('.toggle').forEach(ele => {
    ele.addEventListener("click", () => {
        document.getElementById(`item_${currentSlider}`).classList.remove("in");
        sliderItems[currentSlider].classList.remove("active");
        ele.classList.add("in")
        currentSlider = parseInt(ele.id.split("_")[1]);
        sliderItems[currentSlider].classList.add("active");
    })
})