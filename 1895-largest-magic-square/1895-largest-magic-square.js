/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const R = grid.length, C = grid[0].length;

    const row = Array.from({ length: R }, () => Array(C + 1).fill(0));
    const col = Array.from({ length: R + 1 }, () => Array(C).fill(0));

    for (let i = 0; i < R; i++)
        for (let j = 0; j < C; j++)
            row[i][j + 1] = row[i][j] + grid[i][j];

    for (let j = 0; j < C; j++)
        for (let i = 0; i < R; i++)
            col[i + 1][j] = col[i][j] + grid[i][j];

    let ans = 1;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            for (let size = Math.min(R - i, C - j); size > ans; size--) {
                if (isMagic(i, j, size)) {
                    ans = size;
                    break;
                }
            }
        }
    }
    return ans;

    function isMagic(x, y, l) {
        const target = row[x][y + l] - row[x][y];

        for (let i = 0; i < l; i++)
            if (row[x + i][y + l] - row[x + i][y] !== target)
                return false;

        for (let j = 0; j < l; j++)
            if (col[x + l][y + j] - col[x][y + j] !== target)
                return false;

        let d1 = 0, d2 = 0;
        for (let k = 0; k < l; k++) {
            d1 += grid[x + k][y + k];
            d2 += grid[x + l - 1 - k][y + k];
        }
        return d1 === target && d2 === target;
    }
};