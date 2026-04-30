/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const NEG = -1e9;

    let prev = Array.from({ length: n }, () => Array(k + 1).fill(NEG));

    for (let i = 0; i < m; i++) {
        let curr = Array.from({ length: n }, () => Array(k + 1).fill(NEG));

        for (let j = 0; j < n; j++) {
            const gain = grid[i][j];
            const need = gain > 0 ? 1 : 0;
            const limit = Math.min(k, i + j);

            if (i === 0 && j === 0) {
                curr[0][0] = 0;
                continue;
            }

            for (let c = need; c <= limit; c++) {
                let best = NEG;

                if (i > 0 && prev[j][c - need] !== NEG) {
                    best = Math.max(best, prev[j][c - need] + gain);
                }

                if (j > 0 && curr[j - 1][c - need] !== NEG) {
                    best = Math.max(best, curr[j - 1][c - need] + gain);
                }

                curr[j][c] = best;
            }
        }

        prev = curr;
    }

    let ans = NEG;
    for (let c = 0; c <= k; c++) {
        ans = Math.max(ans, prev[n - 1][c]);
    }

    return ans < 0 ? -1 : ans;
};