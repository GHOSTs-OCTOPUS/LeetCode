/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
// This solution was implemented with assistance from ChatGPT
var constructProductMatrix = function(grid) {
    const MOD = 12345;
    const n = grid.length, m = grid[0].length;
    const p = Array.from({ length: n }, () => Array(m).fill(0));

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            p[i][j] = suffix;
            suffix = (suffix * (grid[i][j] % MOD)) % MOD;
        }
    }

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            p[i][j] = (p[i][j] * prefix) % MOD;
            prefix = (prefix * (grid[i][j] % MOD)) % MOD;
        }
    }

    return p;
};