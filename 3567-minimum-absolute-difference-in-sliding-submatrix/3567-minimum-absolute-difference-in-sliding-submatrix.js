/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
// Added using AI
var minAbsDiff = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const ans = Array.from({length: m - k + 1}, () => new Array(n - k + 1).fill(0));

    for (let i = 0; i <= m - k; i++) {
        for (let j = 0; j <= n - k; j++) {
            const v = [];
            for (let x = i; x < i + k; x++)
                for (let y = j; y < j + k; y++)
                    v.push(grid[x][y]);

            v.sort((a, b) => a - b);
            const uniq = [...new Set(v)];

            if (uniq.length <= 1) { ans[i][j] = 0; continue; }

            let mn = Infinity;
            for (let p = 0; p < uniq.length - 1; p++)
                mn = Math.min(mn, uniq[p+1] - uniq[p]);
            ans[i][j] = mn;
        }
    }
    return ans;
};