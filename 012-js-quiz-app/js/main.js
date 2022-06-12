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

    eventInstance.pushEvent(startBtnId, (ev) => {
        changePage(board, `
    <div class="items in">
        <h3 class="question">
            خب سوال اول رو شانسی جواب بده :-)
        </h3>
        <div class="answer_wrapper">
            <p class="answer">
                الف)
                گزینه شماره 1
            </p>
            <p class="answer">
                ب)
                گزینه شماره 2
            </p>
            <p class="answer">
                ج)
                گزینه شماره 3
            </p>
            <p class="answer">
                د)
                گزینه شماره 4
            </p>
        </div>

        <a href="#" class="btn btn-restart">
            شروع مجدد
        </a>

        <div class="info_wrapper">
            <div class="info__item timer">
                <p class="info__header timer__text">
                    زمان باقی مانده:
                </p>
                <p class="info__body timer__time">
                    <span class="timer__time&#45;&#45;minutes">00</span>
                    :
                    <span class="timer__time&#45;&#45;seconds">00</span>
            </div>

            <div class="info__item question_number">
                <p class="info__header question_number__text">
                    سوال شماره:
                </p>
                <p class="info__body question_number__number">
                    <span class="question_number__number&#45;&#45;current">1</span>
                    /
                    <span class="question_number__number&#45;&#45;total">10</span>
            </div>

            <div class="info__item grade">
                <p class="info__header grade__text">
                    امتیاز شما:
                </p>
                <p class="info__body grade__number">
                    <span class="grade__number&#45;&#45;current">0</span>
                    /
                    <span class="grade__number&#45;&#45;total">10</span>
            </div>
        </div>
    </div>
        `);
    });

}
