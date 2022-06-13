function GameCore(questions, board) {


    this.board = board;

    this.canAnswer = false;


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
            <p class="answer" id="a1">
                د)
                ${this.questions[this.courentQuestion].op[1]}
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

            document.querySelectorAll(".answer").forEach(ele => {
                if (ele.id === answerId) {
                    ele.addEventListener("click", (ev) => {
                        if (this.canAnswer) {
                            ele.classList.add("correct")
                            this.canAnswer = false;
                            this.grade += this.questions[this.courentQuestion].grade;
                            document.getElementById("current_grade").innerHTML = this.grade
                            this.courentQuestion++;
                            this.next();
                        }
                    });
                } else {
                    ele.addEventListener("click", (ev) => {
                        if (this.canAnswer) {
                            ele.classList.add("y_answer")
                            ele.style.animation = "shake 400ms"
                            document.getElementById(answerId).classList.add("correct")
                            this.canAnswer = false;
                            this.courentQuestion++;
                            this.next();
                        }
                    });
                }
            });

            let endTime = this.questions[this.courentQuestion].time,
                currentTime = 0;

            let timerInterval = setInterval(() => {
                currentTime++;
                let estTime = endTime - currentTime;
                if (estTime >= 0) {
                    let m = parseInt(estTime / 60).toString();
                    let s = (estTime % 60).toString();

                    if (m.length == 1) {
                        m = "0" + m;
                    }

                    if (s.length == 1) {
                        s = "0" + s;
                    }
                    document.getElementById("minutes").innerText = m;
                    document.getElementById("seconds").innerText = s;

                } else {
                    clearInterval(timerInterval);
                    this.courentQuestion++;
                    document.getElementById(answerId).classList.add("correct");
                    setTimeout(()=>{this.next()},1000)
                }
            }, 1000);


        }
    }

}