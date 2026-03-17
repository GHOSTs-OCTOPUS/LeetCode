/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const height = Array.from({length: m}, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        height[0][j] = matrix[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                height[i][j] = height[i-1][j] + 1;
            } else {
                height[i][j] = 0;
            }
        }
    }

    let area = 0;

    for (let i = 0; i < m; i++) {
        let temp = [...height[i]].sort((a,b) => b - a);
        for (let j = 0; j < n; j++) {
            let width = j + 1;
            area = Math.max(area, temp[j] * width);
        }
    }

    return area;
};