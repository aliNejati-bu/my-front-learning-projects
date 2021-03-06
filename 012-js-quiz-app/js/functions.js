function generateMainPage(mainPageID, startBtnId, mainTextID, mainText) {
    let mainPage = `
    <div class="items in" id="${mainPageID}">
        <h1 class="items__heading">
            بیا جواب مارو بده
        </h1>
        <a id="${startBtnId}" href="#" class="btn btn-start">
            شروع کنیم!
        </a>
        <p class="start__text" id="${mainPageID}">
        ${mainText}
        </p>
    </div>
    `;
    return mainPage;
}


function ClickEventSimulator(board) {
    // board html element
    this.board = board;

    // events array
    this.events = [
        {
            id: "test",
            callback: function () {
            }
        }
    ];

    // add event method
    this.pushEvent = function (id, callback) {
        this.events.push(
            {
                id,
                callback
            }
        );
    }

    // init method
    this.init = function () {
        this.board.addEventListener('click', ev => {
            let targetId = ev.target.id ?? '';

            if (targetId !== '') {
                let elementEvent = this.events.find(ele => ele.id === targetId);
                if (elementEvent) {
                    elementEvent.callback(ev)
                }
            }
        })
    }

}

function changePage(board, newElement, afterCb = () => {
}) {
    let lastChild = board.firstElementChild ?? false;
    if (!lastChild) {
        board.innerHTML = newElement;
        return
    }
    lastChild.style.animation = "backOutLeft 1s ease-in-out";


    lastChild.style.position = "absolute";

    let tempElement = document.createElement("div");
    tempElement.innerHTML = newElement;
    newElement = tempElement.lastElementChild;

    board.appendChild(newElement)


    setTimeout(() => {
        board.removeChild(lastChild);
        afterCb()
    }, 500)
}