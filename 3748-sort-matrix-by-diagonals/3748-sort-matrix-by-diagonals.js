/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;

    function reverse(arr) {
        let i = 0, j = arr.length - 1;
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    function sortDiagonal(row, col, increasing) {
        let len = Math.min(rows - row, cols - col);
        let diagonal = [];
        for (let i = 0; i < len; i++) {
            diagonal.push(mat[row + i][col + i]);
        }

        diagonal.sort((a, b) => a - b);
        if (!increasing) reverse(diagonal);

        for (let i = 0; i < len; i++) {
            mat[row + i][col + i] = diagonal[i];
        }
    }

    for (let row = 0; row < rows; row++) {
        sortDiagonal(row, 0, false); // non-increasing
    }

    for (let col = 1; col < cols; col++) {
        sortDiagonal(0, col, true); // non-decreasing
    }

    return mat;
};