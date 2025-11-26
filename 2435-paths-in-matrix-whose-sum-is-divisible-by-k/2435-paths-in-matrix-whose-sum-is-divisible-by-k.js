/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;

    let prev = Array.from({ length: n }, () => Array(k).fill(0));
    let curr = Array.from({ length: n }, () => Array(k).fill(0));

    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum = (sum + grid[0][j]) % k;
        prev[j][sum] = 1;
    }

    sum = grid[0][0] % k;

    for (let i = 1; i < m; i++) {
        sum = (sum + grid[i][0]) % k;
        curr[0].fill(0);
        curr[0][sum] = 1;

        for (let j = 1; j < n; j++) {
            curr[j].fill(0);
            const val = grid[i][j];
            for (let r = 0; r < k; r++) {
                const nr = (r + val) % k;
                curr[j][nr] = (prev[j][r] + curr[j - 1][r]) % MOD;
            }
        }

        const temp = prev;
        prev = curr;
        curr = temp;
    }

    return prev[n - 1][0];
};