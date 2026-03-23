/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    const MOD = 1e9 + 7;

    let maxProd = Array.from({length: m}, () => Array(n).fill(0));
    let minProd = Array.from({length: m}, () => Array(n).fill(0));

    maxProd[0][0] = minProd[0][0] = grid[0][0];

    for (let i = 1; i < m; i++) {
        maxProd[i][0] = minProd[i][0] = maxProd[i-1][0] * grid[i][0];
    }

    for (let j = 1; j < n; j++) {
        maxProd[0][j] = minProd[0][j] = maxProd[0][j-1] * grid[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let val = grid[i][j];

            let candidates = [
                maxProd[i-1][j] * val,
                minProd[i-1][j] * val,
                maxProd[i][j-1] * val,
                minProd[i][j-1] * val
            ];

            maxProd[i][j] = Math.max(...candidates);
            minProd[i][j] = Math.min(...candidates);
        }
    }

    let ans = maxProd[m-1][n-1];
    return ans < 0 ? -1 : ans % MOD;
};