/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (!matrix || matrix.length === 0) return [];

    let m = matrix.length, n = matrix[0].length;
    let result = new Array(m * n);
    let row = 0, col = 0;

    for (let i = 0; i < m * n; i++) {
        result[i] = matrix[row][col];

        if ((row + col) % 2 === 0) {
            if (col === n - 1) row++;
            else if (row === 0) col++;
            else { row--; col++; }
        } else {
            if (row === m - 1) col++;
            else if (col === 0) row++;
            else { row++; col--; }
        }
    }

    return result;
};