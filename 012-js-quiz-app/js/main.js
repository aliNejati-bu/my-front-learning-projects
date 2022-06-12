"use strict";

// id's
const mainPageID = 'main-page';
const startBtnId = 'start-btn';
const mainTextID = 'main-text';

// get page elements
const board = document.getElementById("board");

const eventInstance = new ClickEventSimulator(board);


function start() {
    // init event handler
    eventInstance.init();

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

}
