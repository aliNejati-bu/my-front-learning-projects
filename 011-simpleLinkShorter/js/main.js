let mainContainer = document.querySelector('#main-container');
let linkContainer = document.querySelector('#link-container');

document.querySelector("#btn").addEventListener('click', function (e) {
    mainContainer.classList.toggle("open");
    linkContainer.classList.toggle("open");
});