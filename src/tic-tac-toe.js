class TicTacToe {
    constructor() {
        this.table = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.symbol = 'x';
        this.end = false;
        this.winner = null;

    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.table[rowIndex][columnIndex] == 0) {
            this.table[rowIndex][columnIndex] = this.symbol;
            if (this.symbol == 'x') {
                this.symbol = 'o';
            } else {
                this.symbol = 'x';
            }
        }

    }

    isFinished() {
        if (!this.winner) {
            this.getWinner();
        }
        if (this.winner || this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (!this.winner) {
            for (let i = 0; i < 3; i++) {
                //column
                if ((this.table[i][0] == this.table[i][1] && this.table[i][0] == this.table[i][2]) && (this.table[i][0] == 'x' || this.table[i][0] == 'o')) {
                    this.winner = this.table[i][0];
                    return this.winner;
                }
                //row
                if ((this.table[0][i] == this.table[1][i] && this.table[0][i] == this.table[2][i]) && (this.table[0][i] == 'x' || this.table[0][i] == 'o')) {
                    this.winner = this.table[0][i];
                    return this.winner;
                }
            }
            //main diag
            if ((this.table[0][0] == this.table[1][1] && this.table[0][0] == this.table[2][2]) && (this.table[0][0] == 'x' || this.table[0][0] == 'o')) {
                this.winner = this.table[0][0];
                return this.winner;
            }
            //second diag
            if ((this.table[0][2] == this.table[1][1] && this.table[0][2] == this.table[2][0]) && (this.table[0][2] == 'x' || this.table[0][2] == 'o')) {
                this.winner = this.table[0][2];
                return this.winner;
            }
            return null;
        }
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.table[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (!this.winner) {
            this.getWinner();
        }
        if (this.noMoreTurns() && !this.winner) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.table[rowIndex][colIndex]) {
            return this.table[rowIndex][colIndex];
        } else {
            return null;
        }

    }
}

module.exports = TicTacToe;