class SoundManager {


    async playGameAction() {
        let s = new Audio("asset/playBtnSound.wav");
        s.oncanplaythrough = function () {
            s.play();
        };
    }


    async winBtn() {
        let s = new Audio("asset/winBtn.wav");
        s.oncanplaythrough = function (){
            s.play();
        }
    }
}

let sound = new SoundManager();