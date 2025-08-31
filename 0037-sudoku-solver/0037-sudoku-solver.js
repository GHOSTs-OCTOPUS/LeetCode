const solveSudoku = board => {
    const n = 3, N = n * n;
    const rows = Array.from({ length: N }, () => Array(N + 1).fill(0));
    const cols = Array.from({ length: N }, () => Array(N + 1).fill(0));
    const boxes = Array.from({ length: N }, () => Array(N + 1).fill(0));
    let sudokuSolved = false;

    const couldPlace = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        return rows[row][d] + cols[col][d] + boxes[idx][d] === 0;
    };

    const placeNumber = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        rows[row][d]++;
        cols[col][d]++;
        boxes[idx][d]++;
        board[row][col] = `${d}`;
    };

    const removeNumber = (d, row, col) => {
        const idx = Math.floor(row / n) * n + Math.floor(col / n);
        rows[row][d]--;
        cols[col][d]--;
        boxes[idx][d]--;
        board[row][col] = '.';
    };

    const placeNextNumbers = (row, col) => {
        if (row === N - 1 && col === N - 1) sudokuSolved = true;
        else if (col === N - 1) backtrack(row + 1, 0);
        else backtrack(row, col + 1);
    };

    const backtrack = (row, col) => {
        if (board[row][col] === '.') {
            for (let d = 1; d <= 9; d++) {
                if (couldPlace(d, row, col)) {
                    placeNumber(d, row, col);
                    placeNextNumbers(row, col);
                    if (!sudokuSolved) removeNumber(d, row, col);
                }
            }
        } else placeNextNumbers(row, col);
    };

    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            if (board[i][j] !== '.') placeNumber(Number(board[i][j]), i, j);

    backtrack(0, 0);
};