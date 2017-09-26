class TicTacToe {
    constructor() {
        this.table = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        // console.log(this.table[1][2]);
        this.symbol = 'x';
        this.end = false;

    }

    getCurrentPlayerSymbol() {
        //console.log(this.symbol);
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
        let diag = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        //  console.log(this.table);
        for (let i = 0; i < 3; i++) {
            if (this.table[i] == ['x', 'x', 'x'] || this.table[i] == ['o', 'o', 'o']) {
                return true;
            }
            if ((this.table[0][i] == this.table[1][i] && this.table[0][i] == this.table[2][i]) && (this.table[0][i] == 'x' || this.table[0][i] == 'o')) {
                console.log(true);
                return true;
            }
            diag[0][i] = this.table[i][i];
        }
        for (let i = 2; i >= 0; i--) {
            diag[1][i] = this.table[i][2 - i];
        }
        if ((diag[0] == ['x', 'x', 'x'] || diag[0] == ['o', 'o', 'o']) || (diag[1] == ['x', 'x', 'x'] || diag[1] == ['o', 'o', 'o'])) {

            return true;
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.table[i][j] == 0) {
                    // console.log();
                    return false;
                }
            }
        }
        console.log(true);
        return true;

    }

    getWinner() {
        if (this.end) {
            return this.symbol;
        }
        return null
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.table[i][j] == 0) {
                    // console.log(this.table);
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {

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