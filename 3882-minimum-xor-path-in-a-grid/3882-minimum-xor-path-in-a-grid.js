/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const n = grid[0].length;
    const dp = Array.from({length: n}, () => new Uint8Array(1024));  // dp[j][x]: XOR x can reach column j of the row above
    dp[0][0] = 1;
    for (const row of grid)
        for (let j = 0; j < n; j++) {
            const next = new Uint8Array(1024);
            for (let x = 0; x < 1024; x++)
                if (dp[j][x] || j && dp[j - 1][x]) next[x ^ row[j]] = 1;  // from above or from the left
            dp[j] = next;
        }
    return dp[n - 1].indexOf(1);
};