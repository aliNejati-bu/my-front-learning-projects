function GameCore(questions, board) {


    this.board = board;

    this.canAnswer = false;


    this.playHistory = [];

    this.totalGrade = 0;
    questions.forEach(question => {
        this.totalGrade += question.grade
    });

    this.questions = questions;

    this.courentQuestion = 0;

    this.grade = 0;

    this.next = function () {
        if (this.courentQuestion < this.questions.length) {
            this.canAnswer = true;
            let questionPage = `
            <div class="items in">
        <h3 class="question">
            ${this.questions[this.courentQuestion].title}
        </h3>
        <div class="answer_wrapper">
            <p class="answer" id="a1">
                الف)
                ${this.questions[this.courentQuestion].op[0]}
            </p>
            <p class="answer" id="a2">
                ب)
                ${this.questions[this.courentQuestion].op[1]}
            </p>
            <p class="answer" id="a3">
                ج)
                ${this.questions[this.courentQuestion].op[2]}
            </p>
            <p class="answer" id="a4">
                د)
                ${this.questions[this.courentQuestion].op[3]}
            </p>
        </div>

        <a href="#" class="btn btn-restart" onclick="location.reload()">
            شروع مجدد
        </a>

        <div class="info_wrapper">
            <div class="info__item timer">
                <p class="info__header timer__text">
                    زمان باقی مانده:
                </p>
                <p class="info__body timer__time">
               
                    <span class="timer__time" id="seconds">00</span>
                :
                    <span class="timer__time" id="minutes">00</span>
                    
                    
            </div>

            <div class="info__item question_number">
                <p class="info__header question_number__text">
                    سوال شماره:
                </p>
                <p class="info__body question_number__number">
                    <span class="question_number__number&#45;&#45;current">${this.courentQuestion + 1}</span>
                    /
                    <span class="question_number__number&#45;&#45;total">${this.questions.length}</span>
            </div>

            <div class="info__item grade">
                <p class="info__header grade__text">
                    امتیاز شما:
                </p>
                <p class="info__body grade__number">
                    <span class="grade__number&#45;&#45;" id="current_grade">${this.grade}</span>
                    /
                    <span class="grade__number&#45;&#45;total">${this.totalGrade}</span>
            </div>
        </div>
    </div>`;
            changePage(board, questionPage);

            let answerId = "a" + (this.questions[this.courentQuestion]).answer.toString();


            let endTime = this.questions[this.courentQuestion].time,
                currentTime = 0;

            let timerInterval = setInterval(() => {
                currentTime++;
                let estTime = endTime - currentTime;
                if (estTime >= 0) {
                    let m = parseInt(estTime / 60).toString();
                    let s = (estTime % 60).toString();

                    if (m.length === 1) {
                        m = "0" + m;
                    }

                    if (s.length === 1) {
                        s = "0" + s;
                    }
                    document.getElementById("minutes").innerText = m;
                    document.getElementById("seconds").innerText = s;

                } else {
                    clearInterval(timerInterval);
                    document.getElementById(answerId).classList.add("correct");
                    this.questions[this.courentQuestion].yourAnswer = "endTime";
                    this.playHistory.push(this.questions[this.courentQuestion]);
                    this.canAnswer = false;
                    this.courentQuestion++;
                    setTimeout(() => {
                        this.next()
                    }, 1000)
                }
            }, 1000);

            document.querySelectorAll(".answer").forEach(ele => {
                if (ele.id === answerId) {
                    ele.addEventListener("click", () => {
                        if (this.canAnswer) {
                            ele.classList.add("correct")
                            this.canAnswer = false;
                            this.grade += this.questions[this.courentQuestion].grade;
                            document.getElementById("current_grade").innerHTML = this.grade
                            clearInterval(timerInterval);
                            this.questions[this.courentQuestion].yourAnswer = ele.id;
                            this.playHistory.push(this.questions[this.courentQuestion]);
                            this.courentQuestion++;
                            setTimeout(() => {
                                this.next()
                            }, 500)
                        }
                    });
                } else {
                    ele.addEventListener("click", () => {
                        if (this.canAnswer) {
                            ele.classList.add("y_answer")
                            ele.style.animation = "shake 400ms"
                            document.getElementById(answerId).classList.add("correct")
                            this.canAnswer = false;
                            clearInterval(timerInterval);
                            this.questions[this.courentQuestion].yourAnswer = ele.id;
                            this.playHistory.push(this.questions[this.courentQuestion]);
                            this.courentQuestion++;
                            setTimeout(() => {
                                this.next()
                            }, 500)
                        }
                    });
                }
            });


        } else {
            this.endPage()
        }
    }

    this.endPage = function () {
        const endPage = `
        <div class="items in">
        <h1 class="items__heading">
            نمره
            <span class="grade">
                12
            </span>
        </h1>
        <p class="start__text first-p">
            خب خب شما
            <span class="time"> 120 </span>
            تا سوال  رو جواب دادی و نمره
            <span class="grade">
                12
            </span>
            از مجموع امتیاز

            <span class="total_grade">
                100
            </span>
            گرفتید.
            حالا اگر میخوایید میتونید دوباره به سوالات پاسخ دهید.
        </p>
        <p class="start__text">
            از اونجایی که میگن مسئله چون حل شود آسان شود شما برای بار دوم سوالا آسونی داری.
        </p>
        <div class="end-btn-wrapper">
            <a href="#" id="reset" class="btn btn-restart btn-end">دوباره</a>
            <a href="#" class="btn btn-review" id="review">باز بینی پاسخ ها</a>
        </div>
    </div>
        `;

        changePage(board, endPage);

        document.querySelectorAll('.grade').forEach(ele => {
            ele.innerHTML = this.grade;
        });

        document.querySelectorAll('.total_grade').forEach(ele => {
            ele.innerHTML = this.totalGrade;
        });

        document.querySelectorAll('.time').forEach(ele => {
            ele.innerHTML = this.questions.length;
        });

        document.getElementById("reset").addEventListener("click", () => window.location.reload())

        this.courentQuestion = 0;

        document.getElementById("review").addEventListener("click", () => {
            this.nextHistory()
        });


    }

    this.nextHistory = function () {


        if (this.courentQuestion >= 0 && this.courentQuestion < this.questions.length) {
            const body = `
        <div class="items in">
        <h3 class="question">
            (${this.courentQuestion + 1}) - ${this.questions[this.courentQuestion].title}
        </h3>
        <div class="answer_wrapper">
            <p class="answer" id="a1">
                الف)
                ${this.questions[this.courentQuestion].op[0]}
            </p>
            <p class="answer" id="a2">
                ب)
                ${this.questions[this.courentQuestion].op[1]}
            </p>
            <p class="answer" id="a3">
                ج)
                ${this.questions[this.courentQuestion].op[2]}
            </p>
            <p class="answer" id="a4">
                د)
                ${this.questions[this.courentQuestion].op[3]}
            </p>
        </div>

        <div class="end-btn-wrapper">
            <a href="#" class="btn btn-restart btn-end" id="prev">سوال قبلی</a>
            <a href="#" class="btn btn-review" id="next">سوال بعدی</a>
        </div>
    </div>
        `;
            changePage(this.board, body, () => {
                let answerId = "a" + (this.questions[this.courentQuestion]).answer.toString();
                document.getElementById(answerId).classList.add("correct");
                if (this.playHistory[this.courentQuestion].yourAnswer !== "endTime") {
                    document.getElementById(this.playHistory[this.courentQuestion].yourAnswer).classList.add("y_answer")
                    document.getElementById(this.playHistory[this.courentQuestion].yourAnswer).innerHTML = document.getElementById(this.playHistory[this.courentQuestion].yourAnswer).innerHTML + " <span>(پاسخ شما)</span>"
                } else {
                    document.querySelector(".question").innerHTML = document.querySelector(".question").innerHTML + "(پایان زمان) "
                }

                let clickStats = true;

                document.getElementById("prev").addEventListener("click", () => {
                    if (clickStats) {
                        console.log("prev called")
                        this.courentQuestion--;
                        clickStats = false;
                        this.nextHistory();
                    }
                });
                document.getElementById("next").addEventListener("click", () => {
                    if (clickStats) {
                        this.courentQuestion++;
                        clickStats = false;
                        this.nextHistory();
                    }
                });
            })
        } else {
            this.endPage()
        }


    }

}