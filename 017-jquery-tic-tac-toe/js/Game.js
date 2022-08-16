class Game {
    constructor(gamePlayedCb, endGameCb) {
        this.status = "blue";


        this.gameStatus = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        this.gamePlayCb = gamePlayedCb;

        this.endGameCb = endGameCb;

        this.endGameStatus = "";
    }


    playAGame(row, col) {
        if (this.gameStatus[row][col] !== 0 || this.endGameStatus !== "") {
            return false;
        }

        let winChecker;
        if (this.status === "blue") {
            this.status = "red";
            this.gameStatus[row][col] = 1;


            winChecker = this.endGameCheck(1);
            if (winChecker !== false) {
                this.endGameStatus = "blue";
                winChecker.winner = 1;
            }

        } else {
            this.status = "blue";
            this.gameStatus[row][col] = 2;


            winChecker = this.endGameCheck(2);
            if (winChecker !== false) {
                this.endGameStatus = "red";
                winChecker.winner = 2;
            }
        }

        this.gamePlayCb.apply(this, [this.gameStatus]);

        if (winChecker !== false) {
            this.endGameCb.apply(this, [winChecker])
        }

        return true;
    }

    endGameCheck(color) {
        if (
            game.gameStatus[0][0] === color &&
            game.gameStatus[0][1] === color &&
            game.gameStatus[0][2] === color
        ) {
            return {
                status: [
                    [color, color, color],
                    [0, 0, 0],
                    [0, 0, 0]
                ]
            };
        } else if (
            game.gameStatus[1][0] === color &&
            game.gameStatus[1][1] === color &&
            game.gameStatus[1][2] === color
        ) {
            return {
                status: [
                    [0, 0, 0],
                    [color, color, color],
                    [0, 0, 0]
                ]
            };
        } else if (
            game.gameStatus[2][0] === color &&
            game.gameStatus[2][1] === color &&
            game.gameStatus[2][2] === color
        ) {
            return {
                status: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [color, color, color]
                ]
            };
        } else if (
            game.gameStatus[0][0] === color &&
            game.gameStatus[1][1] === color &&
            game.gameStatus[2][2] === color
        ) {
            return {
                status: [
                    [color, 0, 0],
                    [0, color, 0],
                    [0, 0, color]
                ]
            };
        } else if (
            game.gameStatus[0][2] === color &&
            game.gameStatus[1][1] === color &&
            game.gameStatus[2][0] === color
        ) {
            return {
                status: [
                    [0, 0, color],
                    [0, color, 0],
                    [color, 0, 0]
                ]
            };
        } else if (
            game.gameStatus[0][0] === color &&
            game.gameStatus[1][0] === color &&
            game.gameStatus[2][0] === color
        ) {
            return {
                status: [
                    [color, 0, 0],
                    [color, 0, 0],
                    [color, 0, 0]
                ]
            };
        } else if (
            game.gameStatus[0][1] === color &&
            game.gameStatus[1][1] === color &&
            game.gameStatus[2][1] === color
        ) {
            return {
                status: [
                    [0, color, 0],
                    [0, color, 0],
                    [0, color, 0]
                ]
            };
        } else if (
            game.gameStatus[0][2] === color &&
            game.gameStatus[1][2] === color &&
            game.gameStatus[2][2] === color
        ) {
            return {
                status: [
                    [0, 0, color],
                    [0, 0, color],
                    [0, 0, color]
                ]
            };
        }

        return false;
    }


}

