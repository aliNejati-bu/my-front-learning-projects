"use strict";

// id's
const mainPageID = 'main-page';
const startBtnId = 'start-btn';
const mainTextID = 'main-text';

// get page elements
const board = document.getElementById("board");


function start() {


    let mainPageHtml = generateMainPage(
        mainPageID,
        startBtnId,
        mainTextID,
        `
            پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی
            رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد
            و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش
            ندارم…
        `
    );

    board.innerHTML = mainPageHtml;

    document.getElementById(startBtnId).addEventListener("click",startEvent)

}


function startEvent(ev) {


    ev.target.removeEventListener("click",startEvent);

    let app = new GameCore([
        {
            title: "این یک سوال شانسیه!!",
            op: [
                "گزینه یک",
                "گزینه دو",
                "گزینه سه",
                "گزینه چهار",
            ],
            grade: 20,
            time: 10,
            answer: 2
        },{
            title: "این یک سوال شانسیه!!",
            op: [
                "گزینه یک",
                "گزینه دو",
                "گزینه سه",
                "گزینه چهار",
            ],
            grade: 20,
            time: 15,
            answer: 2
        },
    ], board);
    app.next();
}