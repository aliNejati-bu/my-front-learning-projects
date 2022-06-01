let items = [];


/* Get Element and push To Items Array */
document.querySelectorAll(".home__list_item")
    .forEach(ele => {
        items.push(ele)
    });

document.querySelector("#search-input").addEventListener("keyup", search)
document.querySelector("#search-input").addEventListener("change", search)
document.querySelector(".home__list").addEventListener('click', deleteItem);

document.querySelector("#submit-btn").addEventListener("click", ev => {
    console.log(ev.type)
    // delete defaults form
    ev.preventDefault();

    let body = document.querySelector("#form-input").value;
    if (body !== "") {
        let newLi = document.createElement("li");
        newLi.className = "home__list_item";
        let newSpan = document.createElement("span");
        newSpan.textContent = body;
        let newDeleteBtn = document.createElement("button");
        newDeleteBtn.className = "btn btn--delete";
        newDeleteBtn.textContent = "X";
        newLi.append(newSpan, newDeleteBtn);
        items.push(newLi);
        document.querySelector(".home__list").appendChild(newLi);
    }
});


function search(ev) {
    let searchKey = ev.target.value;
    let searchResult = [];
    items.forEach(ele => {
        if (ele.children[0].textContent.toLowerCase().includes(searchKey.toLowerCase())) {
            searchResult.push(ele)
        }
    });
    console.log(searchResult)
    calcList(searchResult);
}


function deleteItem(ev) {
    if (ev.target.classList.contains("btn--delete")) {
        let li = ev.target.parentElement;
        items = items.filter(ele=>ele!=li);
        document.querySelector(".home__list").removeChild(li)
    }
}

function calcList(listOfItems) {
    let list = document.querySelector(".home__list");
    list.innerHTML = "";
    list.append(...listOfItems);
}