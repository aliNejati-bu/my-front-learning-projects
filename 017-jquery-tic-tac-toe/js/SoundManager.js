class SoundManager {


    async playGameAction() {
        let s = new Audio("asset/playBtnSound.wav");
        $(s).on('canplaythrough', function () {
            s.play();
        });
    }
}

let sound = new SoundManager();